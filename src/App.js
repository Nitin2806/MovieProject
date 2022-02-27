import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Search from "./components/Search";
function App() {
  return (
    <Main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;

const Main = styled.div``;
