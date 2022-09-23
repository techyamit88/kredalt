const firebaseConfig = {
    apiKey: "AIzaSyCmVM28PNSroQF8jRXJPja6hmue0Z8khFU",
    authDomain: "kred-613e5.firebaseapp.com",
    databaseURL: "https://kred-613e5-default-rtdb.firebaseio.com",
    projectId: "kred-613e5",
    storageBucket: "kred-613e5.appspot.com",
    messagingSenderId: "265661323407",
    appId: "1:265661323407:web:f2f805e44b0b5eb21138fa",
    measurementId: "G-TBVLM7V9HR"
  };

  //intialize firebaseConfig
  firebase.initializeApp(firebaseConfig);
  //refernce your database
  // initialize firebase

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var subject = getElementVal("subject");
  var message = getElementVal("message");

  saveMessages(name, email,subject, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email,subject, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    subject:subject,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};