import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
