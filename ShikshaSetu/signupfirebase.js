// Import necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgxcN9jcfzuxhjfDYH_AcZ4CkFoa9OcxI",
  authDomain: "shikshasetu-79326.firebaseapp.com",
  projectId: "shikshasetu-79326",
  storageBucket: "shikshasetu-79326.firebasestorage.app",
  messagingSenderId: "885276604164",
  appId: "1:885276604164:web:7432a37d30deda97d90251",
  measurementId: "G-YRS5JHFWSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle user signup
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create new user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
      // Redirect user to login page after successful signup
      window.location.href = "login.html"; // Redirect to signin page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Code:", errorCode);
      console.log("Error Message:", errorMessage);
      alert("Error during signup: " + errorMessage); // Show error message to the user
    });
});
