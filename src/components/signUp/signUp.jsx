import "./signUpCss.css";
import FormSection from "./FormSection";
import TextSection from "./TextSection";
export default function SignUp() {
  return (
    <div
      className="app p-8 gap-5" 
    >
      <TextSection />
      <FormSection />
    </div>
  );
}
