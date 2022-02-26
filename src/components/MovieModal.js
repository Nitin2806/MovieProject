import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { GiCrossFlare } from "react-icons/gi";

const MovieModal = ({ detail, open, close }) => {
  useEffect(() => {
    console.log(detail);
  }, []);

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
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };
  return (
    <div>
      <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
        <CloseModal onClick={close}>
          <GiCrossFlare />
        </CloseModal>
        <Container>
          <Poster>
            <img
              src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
              alt="Poster"
            />
          </Poster>
          <Releasedate>{detail.release_date}</Releasedate>
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
  cursor: pointer;
`;

const Container = styled.div`
  margin: 10px;
`;

const Poster = styled.div`
  display: flex;

  img {
    width: 160px;
    height: 250px;
    border-radius: 10px;
  }
`;
const Releasedate = styled.div`
  display: flex;
  flex-direction: column;
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
