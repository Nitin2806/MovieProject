import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { search } from "./fetchmethod";
import MovieModal from "./MovieModal";
const Search = () => {
  const inputRef = useRef();
  const [search_q, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [modal, openmodal] = useState(false);
  const [detail, mdetail] = useState();
  const closemodal = () => {
    openmodal(false);
  };

  useEffect(() => {
    if (search_q === "") {
      setMovies([]);
      return;
    }
  }, []);

  useEffect(() => {
    if (search_q === "") {
      setMovies([]);
      return;
    }

    const handleChange = async (search_q) => {
      let query = search_q;
      const setEmpty = () => {
        setMovies([]);
      };

      if (!query || query.length === 0) {
        setEmpty();
        return;
      }
      let data = await search(query);
      let { results } = data.data;
      //   console.log("Result  ", data.data.results);

      if (!results) {
        setEmpty();
        return;
      }

      setMovies(data.data.results);
    };

    const timeout = setTimeout(() => {
      handleChange(search_q);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search_q]);

  //   console.log("Query", search_q);

  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() === "");
    setSearch(e.target.value);
  };

  //   console.log("Search Result", movies);
  return (
    <Container>
      <SearchBar>
        <input
          ref={inputRef}
          type="search"
          value={search_q}
          autoFocus
          onChange={(e) => {
            changeHandler(e);
          }}
          placeholder="Search Movie"
        />
      </SearchBar>
      <Results>
        {movies.map((data) => {
          return (
            <Data
              key={data.id}
              onClick={() => {
                openmodal(true);
                mdetail(data);
              }}
            >
              <Poster
                src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`}
                alt="Poster"
              ></Poster>
              <Title>{data.original_title}</Title>
            </Data>
          );
        })}
      </Results>
      {modal && <MovieModal detail={detail} open={modal} close={closemodal} />}
    </Container>
  );
};

export default Search;
const Container = styled.div`
  margin-top: 66px;
`;
const SearchBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  input {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
  }
`;

const Results = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const Data = styled.div`
  border: 1px solid silver;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  user-select: none;
  border-radius: 10px;
  width: 50%;
  align-self: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Title = styled.div`
  margin: 50px 0 10px 10px;
`;
const Poster = styled.img`
  width: 80px;
  border-radius: 10px 0 0 10px;
`;
