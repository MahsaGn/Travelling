import React, { useState } from "react";
import "../../styles/style.css";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

export var Comment = function() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: "2rem" }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size="lg">
          افزودن نظر
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>نظرات</Alert.Heading>
          <label>
            <input type="text" name="name" />
          </label>
          <br />

          <Button onClick={() => setShowMessage(false)}>بستن</Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
};

ReactDOM.render(<Comment />, document.getElementById("root"));
