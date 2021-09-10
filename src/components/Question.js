import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import "./css/Question.css"

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return history.push("/Final");
    else if (i === correct) return handleNext; 
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 100);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      history.push("/Final");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Por favor seleccione una de las opciones");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  const handleFin = () => {
    setCurrQues(0);
    setQuestions();
    history.push("/Final");
  };

  return (
    <div className="question">
      <h1>Pregunta: {currQues + 1} </h1>

      <div className="singleQuestion">
        <h5>{questions[currQues].question}</h5>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 180 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Siguiente pregunta"}
          </Button>
        
        </div>
      </div>
    </div>
  );
};

export default Question;
