import { firebaseFactory } from '../firebase';
import { investorsCollection } from './investors.collection';
import { usersCollection } from './users.collection';

const collection = firebaseFactory()
  .firestore()
  .collection('units');

const parseInvestorDocumentRef = async investorRef => {
  const user = await usersCollection.get(investorRef.user.id);
  return {
    user,
    ...investorRef,
  };
};

const unitsCollection = {
  get: async id => {
    const result = await collection.doc(id).get();
    return result.data();
  },
  getAll: async () => {
    const result = await collection.get();
    return result.docs
      .map(doc => doc.data())
      .map(data => {
        if (Array.isArray(data.investors)) {
          const investors = data.investors.map(async investorRef => {
            const investor = await parseInvestorDocumentRef(investorRef);
            return investor;
          });

          return {
            ...data,
            investors,
          };
        }

        return {
          ...data,
        };
      });
  },
  addInvestor: async (id, investor = {}) => {
    if (!id || !investor.id) {
      throw new Error('Missing unitId or investorId');
    }
    const unit = await unitsCollection.get(id);
    const investorRef = await investorsCollection.get(investor.id);
    const unitInvestors = unit.investors || [];
    const investors = [...unitInvestors, investorRef];
    const newData = Object.assign({}, unit, {
      investors,
    });
    return collection.doc(id).set(newData);
  },
};

export { unitsCollection };
