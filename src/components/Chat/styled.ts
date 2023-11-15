import styled from "styled-components";

export const Container = styled.article`
    & {
        position: fixed;
        bottom: 1%;
        right: 2%;
        padding: 15px;
        border-radius: 50%;
        background-color:  ${(props) => props.theme.color.primary.main};
        color: ${(props) => props.theme.color.secundary.contrastText};
        transition: all ease 0.5s ;
    }
    
    &:hover {
        filter: brightness(60%);
    }
`;
