import { firebaseFactory } from '../firebase';

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
};

export { investorsCollection };
