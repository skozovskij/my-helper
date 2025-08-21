import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SubjectButton.css";

export default function SubjectButton({ title, subjectId, emoji, className }) {
  const navigate = useNavigate();

  const goToSubject = () => {
    navigate(`/subjects/${subjectId}`);
  };

  return (
    <button
      onClick={goToSubject}
      className={`subject-button relative flex flex-col items-center justify-center
                 rounded-2xl w-48 h-48 shadow-lg hover:scale-105 transition ${className}`}
      data-emoji={emoji}
    >
      <span className="title relative text-2xl font-bold">{title}</span>
    </button>
  );
}
