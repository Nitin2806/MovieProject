import React, { useState } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

function Wrap({ src, alt }) {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const onLoad = () => {
    setLoading(false);
    setOpacity(true);
  };

  const onError = () => {
    setLoading(false);
    setImgSrc(<ClipLoader />);
  };

  return (
    <>
      {src ? (
        <Wrapper>
          {loading && (
            <Loading>
              <ClipLoader />
            </Loading>
          )}
          <Photo
            src={imgSrc}
            alt={alt || "image"}
            onLoad={onLoad}
            opaque={opacity}
            onError={onError}
            loading="lazy"
          />
        </Wrapper>
      ) : null}
    </>
  );
}

export default Wrap;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-radius: 6px;
  cursor: pointer;
  width: 90%;
  overflow: hidden;
  border: 1px solid rgba(249, 249, 249, 0.1);
  border: transparent;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  min-height: 220px;

  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 620px) {
    min-height: 60px;
  }
  @media (max-width: 724px) {
    min-height: 100px;
    &:hover {
      transform: none;
    }
  }
  @media (max-width: 920px) {
    min-height: 120px;
  }
  @media (max-width: 1320px) {
    min-height: 130px;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-left: 60px;
  @media (max-width: 724px) {
    margin-left: 30px;
  }
  img {
    margin: auto;
    height: 80px;
    width: 80px;
    min-width: 100%;
    opacity: 0.5;
  }
`;

const Photo = styled.img`
  min-height: 100%;
  width: 100%;
  object-fit: contain;
  pointer-events: none !important;
  opacity: ${(props) => (props.opaque ? 1 : 0)};
  transition: all 600ms ease;
  transform: ${(props) => (props.opaque ? "scale(1)" : "scale(0)")};
`;
