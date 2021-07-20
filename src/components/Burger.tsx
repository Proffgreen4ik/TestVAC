import styled from "styled-components";

interface IBurger {
  onClick: () => void;
}

const StyledSvg = styled.svg`
  position: absolute;
  top: 78px;
  left: 27px;
  cursor: pointer;
`;

export const Burger = ({ onClick }: IBurger) => (
  <StyledSvg
    width="28"
    height="19"
    viewBox="0 0 28 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <line
      x1="1.5"
      y1="1.5"
      x2="26.5"
      y2="1.5"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="1.5"
      y1="9.5"
      x2="26.5"
      y2="9.5"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="1.5"
      y1="17.5"
      x2="26.5"
      y2="17.5"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSvg>
);
