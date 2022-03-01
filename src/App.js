import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Search from "./components/Search";
import Detail from "./components/Detail";
function App() {
  return (
    <Main>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />

          <Route path="/details" element={<Detail />} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;

const Main = styled.div``;
