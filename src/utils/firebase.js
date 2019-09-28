import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// @types firebase.app.App
let instance;
const firebaseFactory = () => {
  const initializeApp = () => {
    if (instance) return;
    instance = firebase.initializeApp(config);
  };

  const getInstance = () => {
    if (!instance) {
      initializeApp();
    }
    return instance;
  };

  return {
    config,
    firebase,
    initialize: () => initializeApp(),
    auth: () => getInstance().auth(),
    firestore: () => getInstance().firestore(),
    getSupportedAuthProviders: () => [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };
};

export { firebaseFactory };
