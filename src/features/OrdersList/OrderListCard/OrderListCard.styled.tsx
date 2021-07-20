import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  width: 206px;
  height: 131px;
  margin-right: 12px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: #f7f7f7;
  }
`;
export const CardWrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 3px 0px 12px;
`;

export const CardWrapperHeaderTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
`;
export const CardWrapperHeaderPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 2px;
  color: #b5f968;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #6e9143;
`;

export const CardWrapperDate = styled.p`
  min-height: 18px;
  height: 18px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.408px;
  color: #5364ff;
  margin-top: 5px;
  padding-left: 12px;
`;

export const CardWrapperCounts = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 13px;
  border-top: 1px solid #e5e5e5;
  padding: 10px 0px 0px 30px;
`;

export const CardWrapperCountsItem = styled.li`
  color: #888e99;
  font-size: 15px;
  line-height: 18px;
`;
