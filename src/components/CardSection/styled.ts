import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
`;

export const Title = styled.h2`
    & {
        color: ${(props) => props.theme.color.primary.main};
        padding: 15px 0;
        border-bottom: 1px solid ${(props) => props.theme.color.primary.main};
        font-size: 40px;
    }
`;
