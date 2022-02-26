import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchmovie } from "./fetchmethod";
import Scroller from "./Scroller";

const Home = () => {
  const [popularmovie, setpopularmovie] = useState([]);
  const [Loading, isLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home";
  }, []);

  useEffect(() => {
    isLoading(true);
    fetchmovie().then((movie) => {
      setpopularmovie(movie);
      isLoading(false);
      console.log(movie);
    });
  }, []);

  return (
    <>
      {Loading ? (
        <Loadinganimation></Loadinganimation>
      ) : (
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
      )}
    </>
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
const Loadinganimation = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: auto;
  animation: spin 1s linear infinite;
`;
