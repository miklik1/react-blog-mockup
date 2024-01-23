import Spinner from "react-bootstrap/Spinner";
import "./spinner.styles.scss";

const SpinnerContainer = () => (
  <div className="spinner-container">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default SpinnerContainer;
