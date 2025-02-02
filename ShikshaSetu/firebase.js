
  // Import the functions you need from the SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
  
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

  // Initialize Firebase App
  const app = initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication
  const auth = getAuth(app);

  // Handle sign-in
  const signinForm = document.getElementById("signin-form");
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Email:", email);  // Check if email is correct
    console.log("Password:", password);  // Check if password is correct

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed in:", user);
        window.location.href = "index.html"; // Redirect after sign-in
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Code:", errorCode);
        console.log("Error Message:", errorMessage);
        if (errorCode === "auth/user-not-found") {
            alert("No user found with this email. Please sign up.");
        } else if (errorCode === "auth/invalid-credential") {
            alert("Invalid credentials. Please check your email and password.");
        } else {
            alert("Error during sign-in: " + errorMessage);
        }
    }
});
