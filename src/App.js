import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Layout from "./components/Layout";
import "./style.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/post/:id" element={<Layout><Single/></Layout>}/>
          <Route path="/write" element={<Layout><Write/></Layout>}/>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
