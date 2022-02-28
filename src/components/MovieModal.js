/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { GiCrossMark } from "react-icons/gi";

const MovieModal = ({ detail, open, close }) => {
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "20px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };
  return (
    <div>
      <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
        <CloseModal onClick={close}>
          <GiCrossMark />
        </CloseModal>
        <Container>
          <Top>
            {detail.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                alt="Poster"
              />
            )}

            <Detail>
              {detail.release_date && (
                <Releasedate>Released Date: {detail.release_date}</Releasedate>
              )}
              {detail.vote_average && (
                <Rating>Rating: {detail.vote_average}</Rating>
              )}
            </Detail>
          </Top>
          <Title>{detail.original_title}</Title>

          <Overview>{detail.overview}</Overview>
        </Container>
      </Modal>
    </div>
  );
};

export default MovieModal;

const CloseModal = styled.button`
  padding: 0;
  margin: 0;
  font-size: 30px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  display: inline-block;
  color: white;
  transition: color 1s;
  cursor: pointer;
  :hover {
    color: red;
    transition: color 1s;
  }
`;

const Container = styled.div`
  margin: 10px;
  user-select: none;
`;

const Top = styled.div`
  display: flex;

  img {
    width: 160px;
    height: 250px;
    border-radius: 10px;
    margin-right: 20px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  padding: 10px 0 0 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
`;

const Releasedate = styled.div`
  margin-bottom: 10px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rating = styled.div`
  margin-bottom: 10px;
`;

const Overview = styled.div`
  display: flex;
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  text-align: justify;
  text-justify: inter-word;
  width: 77vw;
  padding-right: 10px;

  @media (max-width: 724px) {
    font-size: 15px;
    max-width: 1190px;
  }
`;
