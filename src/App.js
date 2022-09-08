import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Gender from "./components/Gender";
import Birthday from "./components/Birthday";
import Name from "./components/Name";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/gender" element={<Gender/>}/>
              <Route path="/birthday" element={<Birthday/>}/>
              <Route path="/name" element={<Name/>}/>
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row >
    </Container >
  );
}

export default App;
