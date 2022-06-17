import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  // await updateCurrentUser(auth, { displayName: name });
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
