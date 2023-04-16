import styled from "styled-components";

export const StyledPageTitle = styled.h1``;

export const StyledH2 = styled.h2`
    text-decoration: underline;
`;

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 0px 10px 20px;
`;

export const StyledCardItem = styled.div`
    border: 1px solid grey;
    padding: 10px 10px;
    width: 80%;
    margin-top: 20px;
    text-align: left;
`

export const StyledP = styled.p`
    margin: 5px;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const StyledInput = styled.input`
    padding: 5px 10px;
    margin-bottom: 10px;
`

export const StyledButton = styled.button`
    color: white;
    background-color: red;
    padding: 8px 4px;
    cursor: pointer;
`

export const StyledDeleteText = styled.p`
    color: red;
    text-decoration: underline;
    cursor: pointer;
`
