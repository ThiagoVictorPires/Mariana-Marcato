import { initializeApp, getApps, getApp } from "firebase/app"

// Public client config — these values identify the Firebase project and
// are safe to ship in frontend code (not secrets).
const firebaseConfig = {
  apiKey: "AIzaSyDtWf32UkMulkycL4hi5qhybsbk5JuW9Lk",
  authDomain: "marianamarcato.firebaseapp.com",
  projectId: "marianamarcato",
  storageBucket: "marianamarcato.firebasestorage.app",
  messagingSenderId: "872989779122",
  appId: "1:872989779122:web:cdf4f94991eb13106d95ab",
  measurementId: "G-8GVY8GRSZ9",
}

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)
