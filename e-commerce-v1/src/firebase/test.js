import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('yVQzSz6x0vuhP9QPc4le').collection('cartItems').doc('I7rZgf6A6F0Ln73EbE3p');
firestore.doc('/users/yVQzSz6x0vuhP9QPc4le/I7rZgf6A6F0Ln73EbE3p');
firestore.collection('/users/yVQzSz6x0vuhP9QPc4le/cartItems');