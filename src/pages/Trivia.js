import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import "./css/Trivia.css";

const Trivia = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <img  src="https://th.bing.com/th/id/R.8bdc3179a6454f565b114c37d99bc9f1?rik=Di%2fJvYEVQrCIuQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-6Tv3WHHCeZk%2fUckr77ufGII%2fAAAAAAAAAYw%2fq7vsX0AhBUU%2fs1600%2fQUIEN-QUIERE-SER-MILLONARIO.jpg&ehk=%2fq33H%2fyZ6cgGt955d9WSe9PvWArr4Ex0Z%2foPhQ68zls%3d&risl=&pid=ImgRaw&r=0" height="80px" width="80px"/>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>
               {/* {questions[currQues].difficulty} */}
            </span>
          </div>
              
          <h6> Usuario: {name}</h6>
          <h2> Tema : {questions[currQues].category} </h2>
          <h2> Ganaste : $ {score}  </h2>
          
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Trivia;
