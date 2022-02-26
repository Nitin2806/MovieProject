import React, { useState } from "react";
import Wrap from "./Wrap";
import styled, { keyframes } from "styled-components";
import MovieModal from "./MovieModal";

function Scroller({ movies, total, type }) {
  const [modal, openmodal] = useState(false);
  const [detail, mdetail] = useState();
  const closemodal = () => {
    openmodal(false);
  };
  return (
    <Container>
      <CardContainer>
        {total.results > 0 &&
          movies.map((movie) => {
            return (
              <Card
                key={movie.id}
                onClick={() => {
                  openmodal(true);
                  mdetail(movie);
                }}
              >
                <Wrap
                  title={type === "movie" ? movie.title : movie.name}
                  rating={movie.vote_average}
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  hover={true}
                />
              </Card>
            );
          })}
      </CardContainer>
      {<MovieModal detail={detail} open={modal} close={closemodal} />}
    </Container>
  );
}

export default Scroller;

const Container = styled.div`
  display: flex row;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 724px) {
    justify-content: space-between;
    padding: 0;
  }
`;

const slideIn = keyframes`
from{transform:translateX(100%);}
to{transform:translateX(0);}
`;

const Card = styled.div`
  /* flex: 0 1 calc(20%-1em); */
  width: 200px;
  margin: 15px;
  user-select: none;
  animation: ${slideIn} 500ms ease linear;
  @media (max-width: 724px) {
    width: 120px;
    margin: 15px 0;
  }

  @media (max-width: 360px) {
    width: 160px;
    margin: 15px 0;
  }
  @media (orientation: landscape) and (min-width: 600px) and (max-width: 896px) {
    width: 150px;
    margin: 15px 0;
  }
  @media (orientation: landscape) and (min-width: 320px) and (max-width: 480px) {
    width: 100px;
    margin: 15px 0;
  }
`;
