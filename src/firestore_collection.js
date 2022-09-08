import {collection} from 'firebase/firestore';
import {db} from "./firebase-config";

export const userCollectionRef = collection(db, 'users');
