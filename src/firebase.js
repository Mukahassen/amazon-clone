// Import the 'firebase' library
import firebase from 'firebase'

// Firebase configuration containing credentials and settings
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    projectId: "YOUR_PROJECT_ID_HERE",
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_APP_ID_HERE",
    measurementId: "YOUR_MEASUREMENT_ID_HERE" // Optional for newer versions
};

// Initialize Firebase with the provided configuration
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Create a Firestore database instance
const db = firebaseApp.firestore();

// Create an authentication instance
const auth = firebase.auth();

// Export the Firestore database and authentication for use in other parts of your application
export { db, auth };
