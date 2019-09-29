import * as bluebird from 'bluebird';

import { firebaseFactory } from '../firebase';
import { usersCollection } from './users.collection';
import { helper } from '../helper';

const collection = firebaseFactory()
  .firestore()
  .collection('units');

const parseInvestorDocumentRef = async investorRef => {
  if (!investorRef.user) {
    return investorRef;
  }
  const user = await usersCollection.get(investorRef.user.id);
  const { user: _, ...others } = investorRef;

  return {
    ...others,
    ...user,
  };
};

const unitsCollection = {
  add: async (unit = {}) => {
    try {
      const result = await collection.add(unit);
      return result;
    } catch (error) {
      throw error;
    }
  },
  addAll: async (units = []) => {
    try {
      const asyncUnits = units.map(unitsCollection.add);
      const results = await Promise.all(asyncUnits);
      return results;
    } catch (error) {
      throw error;
    }
  },
  get: async id => {
    try {
      const result = await collection.doc(id).get();
      return result.data();
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const result = await unitsCollection.getAll();
      return result.filter(r => r.id === id);
    } catch (error) {
      throw error;
    }
  },
  getAll: async () => {
    try {
      const result = await collection.get();
      return bluebird.map(result.docs, async doc => {
        const data = await doc.data();

        if (Array.isArray(data.investors)) {
          const investors = await Promise.all(
            data.investors.map(parseInvestorDocumentRef),
          );
          return {
            ...data,
            investors,
          };
        }

        return {
          ...data,
        };
      });
    } catch (error) {
      throw error;
    }
  },
  addInvestor: async (id = 'YRjIfI3lhJJURqjZNt96', investor = {}) => {
    try {
      const unit = await unitsCollection.get(id);
      const investorRef = {
        address: helper.chance.address(),
        firstName: helper.chance.first(),
        lastName: helper.chance.last(),
        id: helper.chance.integer({ min: 1, max: 99 }),
      };
      const unitInvestors = unit.investors || [];
      const investors = [...unitInvestors, investorRef];
      const newData = Object.assign({}, unit, {
        investors,
      });
      return collection.doc(id).set(newData);
    } catch (error) {
      throw error;
    }
  },
};

export { unitsCollection };
