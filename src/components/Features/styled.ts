import styled from "styled-components";

export const Container = styled.section`
    & {
        background-color: var(--blue);
        width: 85%;
        min-height: 50vh;
        border-radius: 15px;
        margin: 0 auto;
        margin-bottom: 20px;
        padding: 20px;
    }
`;

export const SectionTitle = styled.h2`
    & {
        font-style: italic;
        color: #9F9E9E;
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
`;

export const Content = styled.div`
    & {
        display: flex;
        align-items: start;
        margin-top: 10px;
    }
`;

export const DescriptionArea = styled.article`
    & {
        flex: 1;
    }
`;

export const DescriptionTitle = styled.h3``;

export const DescriptionText = styled.p``;

export const DescriptionButtons = styled.div``;

export const ButtonStyled = styled.a``;

export const DefaultButton = styled.a``;

export const Items = styled.article`
    & {
        
    }
`;

export const Item = styled.div``;
