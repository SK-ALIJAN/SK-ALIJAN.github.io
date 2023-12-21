import React from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";
import AOS from "aos";
import "aos/dist/aos.css";

const Spinners = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledDiv>
      <StyledSpinner name="cube-grid" />
      <StyledParagraph data-aos="fade-right" data-aos-duration="1500">
        Welcome to my portfolio
      </StyledParagraph>
    </StyledDiv>
  );
};

export default Spinners;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const StyledSpinner = styled(Spinner)`
  width: 5rem;
  height: 5rem;
  color: teal;
`;

const StyledParagraph = styled.p`
  color: teal;
  width: max-content;
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 10px;
`;
