import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./css/Final.css";

const Final = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <center>
      <img  src="https://th.bing.com/th/id/R.8bdc3179a6454f565b114c37d99bc9f1?rik=Di%2fJvYEVQrCIuQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-6Tv3WHHCeZk%2fUckr77ufGII%2fAAAAAAAAAYw%2fq7vsX0AhBUU%2fs1600%2fQUIEN-QUIERE-SER-MILLONARIO.jpg&ehk=%2fq33H%2fyZ6cgGt955d9WSe9PvWArr4Ex0Z%2foPhQ68zls%3d&risl=&pid=ImgRaw&r=0" height="200px" width="200px"/>
      </center>
      <h1> Usuario: {name}</h1>
      <h1>Ganaste: $ {score}  </h1>
      <center> 
      </center>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Volver al inicio
      </Button>
    </div>
  );
};

export default Final;
