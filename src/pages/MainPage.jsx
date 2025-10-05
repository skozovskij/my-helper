import { useNavigate } from "react-router-dom";
import "../styles/MainPage.css";
import SubjectButton from "../components/SubjectButton";

export default function MainPage() {
  const navigate = useNavigate();

  const goToSubject = (subjectId) => {
    navigate(`/subjects/${subjectId}`);
  };

  return (
    <div className="container-fluid">
      <section>
        <div className="buttons mx-2 my-3">
          <SubjectButton
            title="Математика"
            subjectId="math"
            emoji="📐"
            className="bg-green-100 text-green-800 math-button"
            onClick={() => goToSubject("math")}
          />
          <SubjectButton
            title="Хімія"
            subjectId="chemistry"
            emoji="⚗️"
            className="bg-blue-100 text-blue-800 chem-button"
            onClick={() => goToSubject("chemistry")}
          />
        </div>

        <div className="mx-2 my-3">
          <h1 className="text-center">Вітаємо у Helper!</h1>
        </div>
      </section>
    </div>
  );
}
