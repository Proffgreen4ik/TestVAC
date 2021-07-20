import styled from "styled-components";

export const AppBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppWrapper = styled.div`
  background: url("${process.env.PUBLIC_URL}/img/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 375px;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  ::before {
    content: "";
    background: linear-gradient(
      180deg,
      #ffffff 22.4%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 100%;
    height: 129px;
    position: absolute;
    top: 0;
  }
`;
