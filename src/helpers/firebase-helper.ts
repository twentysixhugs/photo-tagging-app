import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCGTB6z5pBRV4zC5BvAigY4k6TdxMTk7-I',
  authDomain: 'findme-e0ce0.firebaseapp.com',
  projectId: 'findme-e0ce0',
  storageBucket: 'findme-e0ce0.appspot.com',
  messagingSenderId: '160173198269',
  appId: '1:160173198269:web:85a384cd945339d503e0d4',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
