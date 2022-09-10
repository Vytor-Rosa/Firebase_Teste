const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyCdfXo7HCNzwu1IoyDjPUFiAY9N9oSVuLQ",
    authDomain: "marcio-30ea0.firebaseapp.com",
    projectId: "marcio-30ea0",
    storageBucket: "marcio-30ea0.appspot.com",
    messagingSenderId: "487987727583",
    appId: "1:487987727583:web:7972039e7b0f32d8796d6a",
    measurementId: "G-TCE1VQYZNW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function save(Tablename, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, Tablename, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, Tablename), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

module.exports = {
    save
}