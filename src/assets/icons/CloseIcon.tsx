import styled from "styled-components"

interface IClose {
    onClick: () => void;
  }
  

const StyledSvg = styled.svg`
  cursor: pointer;
`

export const CloseIcon = ({ onClick }: IClose) => (
<StyledSvg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
<circle cx="18" cy="18" r="18" fill="#C6CAD2"/>
<line x1="13.9497" y1="22.536" x2="22.435" y2="14.0507" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.4351 22.5352L13.9498 14.0499" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</StyledSvg>
)