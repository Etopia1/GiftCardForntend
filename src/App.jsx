import { useRef } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import HomePage from "./HomePage";
import Formpage from "./Formpage";
import ThirdPage from "./ThirdPage";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";

function App() {
  const formRef = useRef(null); // 🔵 create a ref

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      <HomePage onVerifyClick={scrollToForm}  />
      <FirstPage onVerifyClick={scrollToForm} /> {/* pass the scroll function */}
      <SecondPage />
      <Formpage refProp={formRef} /> {/* pass the ref */}
      <ThirdPage />
	  <ReviewSection/>
	  <Footer/>
    </div>
  );
}

export default App;
