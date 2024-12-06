import PropTypes from "prop-types";
import { useState } from "react";
import Loader from "../../components/Loader";

const Step1 = ({ formData, handleInputChange, handleNext, isLoading }) => {
  const [error, setError] = useState("");

  const handleNextWithValidation = () => {
    if (formData.step1 && formData.step1.length === 11) {
      setError("");
      handleNext();
    } else {
      setError("Fødselsnummer må være 11 siffer.");
    }
  };

  return (
    <>
      <h1 className="font-bold text-lg pt-8">Aktiver BankID for ID sjekk</h1>
      <p className="text-sm">Aldersgrense indentifisering</p>

      <div className="flex flex-col w-full py-10">
        <label className="pb-2">Hva er ditt fødselsnummer?</label>
        <input
          type="text"
          className={`step-input rounded-md bg-[#481b68] border "border-red-500 focus:outline-red-500"
                "border-[#745b88] hover:border-white"
            `}
          placeholder="11 siffer"
          inputMode="numeric"
          maxLength={11}
          minLength={11}
          name="step1"
          value={formData.step1 || ""}
          onChange={handleInputChange}
        />
        <label className="text-xs text-start pt-1">
          Fyll inn fødselsnummer (11 siffer)
        </label>
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>

      <button
        className="bg-white mb-3 text-black px-6 py-2 w-50 rounded-full font-bold"
        onClick={handleNextWithValidation}
        disabled={isLoading || !formData.step1}
      >
        {isLoading ? <Loader /> : "Neste"}
      </button>
    </>
  );
};

Step1.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Step1;
