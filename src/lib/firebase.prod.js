import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// ADD FIREBASE SDK CONFIG HERE
const config = {
	// apiKey: '',
	// authDomain: '',
	// databaseURL: '',
	// projectId: '',
	// storageBucket: '',
	// messagingSenderId: '',
	// appId: '',
};
const firebase = Firebase.initializeApp(config);

export { firebase };
