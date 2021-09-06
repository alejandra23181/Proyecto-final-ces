import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Trivia from "./pages/Trivia";
import Final from "./pages/Final"

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Inicio
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/Trivia">
            <Trivia
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/Final">
            <Final name={name} score={score} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

    
  );
}

export default App;
