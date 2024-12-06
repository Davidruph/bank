import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const Step9 = ({ handleNext, isLoading }) => {
  return (
    <>
      <h1 className="font-bold text-lg pt-8">Aktiver BankID for ID sjekk</h1>
      <p className="text-sm">Aldersgrense indentifisering</p>

      <p className="text-center pt-8 pb-5">Identifisering fullfort</p>

      <div className="bg-[#360f54] rounded-full flex justify-center items-center pb-10 mx-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9400ff"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#9400ff"
            strokeDasharray="63"
            strokeDashoffset="63"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="63"
              to="0"
              dur="0.5s"
              fill="freeze"
            />
          </circle>
          <polyline
            points="9 12 11.5 14.5 16 10"
            strokeDasharray="10"
            strokeDashoffset="10"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="10"
              to="0"
              dur="0.3s"
              begin="0.5s"
              fill="freeze"
            />
          </polyline>
        </svg>
      </div>

      <button
        className="bg-white mb-3 text-black px-6 py-2 w-50 rounded-full font-bold"
        onClick={handleNext}
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : "Lukk"}
      </button>
    </>
  );
};

Step9.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Step9;
