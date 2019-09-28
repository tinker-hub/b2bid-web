import { firebaseFactory } from '../firebase';
import { unitsCollection } from './units.collection';

const collection = firebaseFactory()
  .firestore()
  .collection('investors');

const investorsCollection = {
  get: async id => {
    const result = await collection.doc(id).get();
    return result.data();
  },
  getAll: async () => {
    const result = await collection.get();
    return result.docs.map(doc => doc.data());
  },
  getPortfolios: async id => {
    const units = await unitsCollection.getAll();
    return units.reduce((accumulator, currentValue) => {
      const investors = currentValue.investors || [];
      const newInvestors = investors.filter(investor => investor.id === id);

      if (newInvestors.length) {
        accumulator.push({
          ...currentValue,
          investors: newInvestors,
        });
      }
      return accumulator;
    }, []);
  },
};

export { investorsCollection };
