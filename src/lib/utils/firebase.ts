// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBpklMyR90wilaF5ecNbGwyYLrsmClQNYg',
	authDomain: 'blog-f457e.firebaseapp.com',
	projectId: 'blog-f457e',
	storageBucket: 'blog-f457e.appspot.com',
	messagingSenderId: '867617955628',
	appId: '1:867617955628:web:355185457b06f648281689'
};

export async function init() {
	const app = await initializeApp(firebaseConfig);
	const db = await getFirestore(app);

	return { app, db };
}
