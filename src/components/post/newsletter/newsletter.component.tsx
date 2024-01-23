import { Form } from "react-bootstrap";
import { CustomButton } from "../../button/custom-button.component";

const Newsletter = () => {
  return (
    <div
      className="shadow-sm"
      style={{
        width: "100%",
        backgroundColor: "#D6CCC2",
      }}
    >
      <div
        className="newsletter-container"
        style={{
          backgroundColor: "#D6CCC2",
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5em",
        }}
      >
        <p className="fs-1" style={{ margin: "0.5em" }}>
          Subscribe to our newsletter!
        </p>
        <div
          style={{
            display: "flex",
            gap: "1em",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <Form.Control
            type="email"
            id="inputEmail"
            aria-describedby="inputEmail"
            placeholder="email@example.com"
            style={{
              width: "300px",
            }}
          />
          <CustomButton text="Sign up" />
        </div>
        <Form.Text id="inputEmail" muted>
          Stay updated with our latest articles, tips, and insights! Subscribe
          to our newsletter and receive regular updates delivered straight to
          your inbox.
        </Form.Text>
      </div>
    </div>
  );
};
export default Newsletter;
