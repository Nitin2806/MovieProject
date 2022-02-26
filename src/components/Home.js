import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchmovie } from "./fetchmethod";
import Scroller from "./Scroller";

const Home = () => {
  const [popularmovie, setpopularmovie] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home";
  }, []);

  useEffect(() => {
    fetchmovie().then((movie) => {
      setpopularmovie(movie);
      console.log(movie);
    });
  }, []);

  return (
    <Container>
      <Scroller
        movies={popularmovie.results}
        total={{
          results: popularmovie.total_results,
          pages: popularmovie.total_pages,
        }}
        type="movie"
      />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 65px);
  margin-bottom: 20px;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  @media (max-width: 724px) {
    padding: 10px calc(3.5vw + 5px);
  }
`;
