import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { fetchmovie } from "./fetchmethod";
import Scroller from "./Scroller";

const Home = () => {
  const [popularmovie, setpopularmovie] = useState([]);
  const [filteryear, setfilteryear] = useState([]);
  const [Loading, isLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home";
  }, []);

  useEffect(() => {
    isLoading(true);
    fetchmovie().then((movie) => {
      setpopularmovie(movie);
      const Data = popularmovie.results;
      const filteryears = [
        ...new Set(Data.map((Val) => Val.release_date.slice(0, 4))),
      ];
      setfilteryear(filteryears);
      isLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtermovies = ({ Val }) => {
    isLoading(true);
    console.log(Val);
    const Data = popularmovie.results;
    const newItem = Data.filter((newVal) => {
      return newVal.release_date.slice(0, 4) === Val;
    });
    console.log(newItem);
    setpopularmovie(newItem);
    isLoading(false);
  };

  return (
    <>
      {Loading ? (
        <Loader>
          <Loadinganimation />
        </Loader>
      ) : (
        <Container>
          <FilterOption>
            Filter By Year:
            {filteryear.map((Val, id) => {
              return (
                <Filter
                  key={id}
                  onClick={() => {
                    filtermovies({ Val });
                  }}
                >
                  {" "}
                  {Val}{" "}
                </Filter>
              );
            })}
          </FilterOption>
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
const Loader = styled.div`
  margin-top: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loadinganimation = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 1s linear infinite;
`;
const Filter = styled.button`
  border: none;
  padding: 8px;
  margin: 10px;
  border-radius: 10px;
  font-weight: 800;
  background-color: blueviolet;
  cursor: pointer;
`;
const FilterOption = styled.div`
  margin-left: 100px;
  font-weight: 800;
`;
