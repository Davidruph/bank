import { useState } from "react";
import { IoIosCloudOutline } from "react-icons/io";
import logo from "../assets/logo.svg";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";

const Home = () => {
  const [showError, setShowError] = useState(false);
  const [showStep, setShowStep] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    // if (formData[`step${currentStep}`]) {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep((prevStep) => prevStep + 1);
      setIsLoading(false);
    }, 10000);
    // }
  };

  const goBack = () => {
    setShowStep(false);
    setCurrentStep(1);
    setFormData({});
    setShowError(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 5:
        return (
          <Step5
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 6:
        return (
          <Step6
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 7:
        return (
          <Step7
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 8:
        return (
          <Step8
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 9:
        return (
          <Step9
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      case 10:
        return (
          <Step10
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            isLoading={isLoading}
          />
        );
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      {showStep ? (
        <div
          className={`flex w-auto text-white ${
            currentStep === 10 ? "bg-[#75bff0]" : "bg-[#360f54]"
          } rounded-lg mx-3`}
        >
          <div className="content px-5 md:px-10 pt-5 flex flex-col justify-center items-center">
            {currentStep === 10 ? (
              <IoIosCloudOutline size={70} color="blue" />
            ) : (
              <img src={logo} alt="logo" className="logo mt-3" />
            )}

            {renderStep()}

            {currentStep === 10 ? (
              ""
            ) : (
              <button
                className="text-blue-300 underline pb-14"
                onClick={goBack}
              >
                Ga tilbake
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex w-auto text-white bg-[#75bff0] rounded-md mx-3">
          <div className="content px-2 md:px-10 pt-5 flex flex-col gap-5 justify-center items-center">
            <IoIosCloudOutline size={70} color="blue" />
            <h1 className="font-bold text-lg">NettSky</h1>
            <p className="text-center">
              Den beste plasseringen for bilder, filer,{" "}
              <br className="hidden md:flex" /> notater, e-post og mer
            </p>
            <p className="text-center pb-5">Sarah har delt sin album med deg</p>

            {showError ? (
              <>
                <p className="text-red-600 text-sm text-start font-bold pb-2">
                  Denne nedlastingen inneholder vokseninnhold{" "}
                  <br className="hidden md:flex" /> For a laste den ned, ma du
                  bekrefte at du er 18 ar <br className="hidden md:flex" />{" "}
                  eller eldre
                </p>
                <button
                  className="bg-white mb-16 text-black px-5 py-2 w-50 rounded-full font-bold"
                  onClick={() => setShowStep(true)}
                >
                  Bekreft
                </button>
              </>
            ) : (
              <button
                className="bg-white mb-16 text-black px-5 py-2 w-50 rounded-full font-bold"
                onClick={() => setShowError(true)}
              >
                Last ned
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
