const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyIKXWr4CBd0bZTeAcbMjr717Js3VCcNI",
  authDomain: "shutlr-82193.firebaseapp.com",
  projectId: "shutlr-82193",
  storageBucket: "shutlr-82193.appspot.com",
  messagingSenderId: "640036643881",
  appId: "1:640036643881:web:44c62dda47e19a6231e838",
  measurementId: "G-KC18L5PMT3"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
 
  .then((res) => {
    console.log(res.user);
  })

  .catch((err) => {
    alert(err.message);
    console.log(err.code);
    console.log(err.message)
  })

  console.log('Details Entered');
  console.log(email, "password");
};

const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
 
  .then((res) => {
    console.log(res.user);
  })

  .catch((err) => {
    alert(err.message);
    console.log(err.code);
    console.log(err.message)
  });

  console.log('Details Entered');
  console.log(email, "password");
};

const saveData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  db.collection('users')
  .add({
    email: email,
    password: password
  })
  .then((docRef) => {
    console.log("Document written with ID : ", docRef.id);
  })
  .catch((error) => {
    console.log("Error adding the document : ", error);
  });
}


// const readData = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   db.collection('users')
//   .get()
//   .then((data) => {
//     console.log(data.docs.map((item) => {
//       return {...item.data(), id: item.id};
//     }));
//   });
// }

// const updateData = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   db.collection('users').doc('eHebOBYbUwAQ5IjqUTLt')
//   .update({
//     email: 'tejas@here.com',
//     password: '12345678'
//   })
//   .then((data) => {
//     console.log('DATA UPDATED.');
//   });
  
// }