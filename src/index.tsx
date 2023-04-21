import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg6MhKEaCFRO8JWNSL5Ej9wb9j7XVtVog",
  authDomain: "ifc-bam-webapp.firebaseapp.com",
  projectId: "ifc-bam-webapp",
  storageBucket: "ifc-bam-webapp.appspot.com",
  messagingSenderId: "237408616069",
  appId: "1:237408616069:web:227cb4035767324caff3ec",
};

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
