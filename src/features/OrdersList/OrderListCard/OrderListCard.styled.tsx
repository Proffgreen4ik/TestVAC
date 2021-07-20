import styled from "styled-components";

export const CardWrapper= styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    width: 206px;
    height: 131px;
`
export const CardWrapperHeader= styled.div`
    display: flex;
    justify-content: space-between;
    padding: 13px 3px 0px 12px;
`

export const CardWrapperHeaderTitle= styled.h2`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000;
`
export const CardWrapperHeaderPrice= styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 2px;
    color: #B5F968;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #6E9143;
`

export const CardWrapperDate= styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.408px;
    color: #5364FF;
    margin-top: 5px;
    padding-left: 12px;
`


export const CardWrapperCounts= styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    border-top: 1px solid #E5E5E5;
    padding: 10px 0px 0px 30px;
`

export const CardWrapperCountsItem= styled.li`
    color: #888E99;
    font-size: 15px;
    line-height: 18px;
`