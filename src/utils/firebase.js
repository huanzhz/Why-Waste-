import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyCNogRjp7zvbZ4P24oAV7ae1tR8-AI3bnA",
    authDomain: "ntuhack-cdf85.firebaseapp.com",
    databaseURL: "https://ntuhack-cdf85.firebaseio.com",
    projectId: "ntuhack-cdf85",
    storageBucket: "ntuhack-cdf85.appspot.com",
    messagingSenderId: "490693885558"
};

class FireApp {
	constructor(config) {
		firebase.initializeApp(config);
		this.firestore = firebase.firestore();
	}
	post(msg) {
		const time = new Date().toISOString();
		return this.firestore
			.collection('msg')
			.doc()
			.set({
				time,
				...msg,
			});
	}
	get(cb) {
		return this.firestore
			.collection('msg')
			.get()
			.then(cb);
	}
}

export default new FireApp(config);