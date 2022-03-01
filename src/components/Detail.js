import React, { useEffect } from "react";
import styled from "styled-components";

const Detail = () => {
  useEffect(() => {});

  return (
    <Container>
      <Background></Background>
      <Poster></Poster>
      <Overview></Overview>
    </Container>
  );
};

export default Detail;
const Container = styled.div``;
const Background = styled.img``;
const Poster = styled.img``;

const Overview = styled.div``;
