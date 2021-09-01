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
      <span className="title">Resultado final : {score}</span>
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
