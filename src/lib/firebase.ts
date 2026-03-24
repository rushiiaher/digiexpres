// ─── Firebase ────────────────────────────────────────────────────────────────
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyB-WmDszUZLepVn6ikLA9KhV1JnJmBQerM',
    authDomain: 'digiexpres-f4223.firebaseapp.com',
    projectId: 'digiexpres-f4223',
    storageBucket: 'digiexpres-f4223.firebasestorage.app',
    messagingSenderId: '339405186446',
    appId: '1:339405186446:web:cf8f23121bbe52528ef0df',
    measurementId: 'G-KZ5K7BLP9X',
};

// Prevent re-initialisation during HMR
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Analytics only runs in the browser (no SSR / Node)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Firestore — used to persist contact-form submissions and newsletter signups
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
