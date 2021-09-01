import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import Categories from "../components/Categories";
import "./css/Inicio.css";

const Inicio = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/Trivia");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Configuración trivia</span>
        <div className="settings__select">
          {error && <ErrorMessage>Por favor seleccione una de las opciones</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Fácil
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medio
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Dificil
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Iniciar
          </Button>
        </div>
      </div>
   
    </div>
  );
};

export default Inicio;
