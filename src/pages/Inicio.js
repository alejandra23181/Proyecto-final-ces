import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import Categories from "../components/Categories";
import "./css/Inicio.css";
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

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
          <center>
          <img  src="https://th.bing.com/th/id/R.8bdc3179a6454f565b114c37d99bc9f1?rik=Di%2fJvYEVQrCIuQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-6Tv3WHHCeZk%2fUckr77ufGII%2fAAAAAAAAAYw%2fq7vsX0AhBUU%2fs1600%2fQUIEN-QUIERE-SER-MILLONARIO.jpg&ehk=%2fq33H%2fyZ6cgGt955d9WSe9PvWArr4Ex0Z%2foPhQ68zls%3d&risl=&pid=ImgRaw&r=0" height="120px" width="120px"/>
          </center>
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            color="secondary"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            color="secondary"
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
            color="secondary"
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
            color="secondary"
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
