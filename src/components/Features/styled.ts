import styled from "styled-components";

export const Container = styled.section`
  & {
    background-color: ${(props) => props.theme.color.secundary.main};
    width: 85%;
    min-height: 70vh;
    border-radius: 15px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 25px;
  }
`;

export const SectionTitle = styled.h2`
  & {
    font-style: italic;
    color: #9f9e9e;
    font-size: 1.2rem;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-left: 10px;
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
    padding: 10px;
    width: 100%;
  }
`;

export const DescriptionTitle = styled.h3`
  & {
    font-size: 44px;
    color: ${(props) => props.theme.color.primary.contrastText};
    font-weight: bold;
  }
`;

export const DescriptionText = styled.p`
  & {
    margin-top: 50px;
    font-size: 19px;
    color: #9f9e9e;
    font-weight: 300;
    text-align: justify;
    width: 80%;
    line-height: 1.3;
  }
`;

export const DescriptionButtons = styled.div`
  & {
    margin-top: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
    width: 80%;
  }
`;

export const ButtonStyled = styled.a`
  & {
    border-radius: 50px;
    padding: 5.3% 8%;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.background};
    transition: all ease 0.3s;
  }


  &:hover {
    transform: scale(1.08);
  }
`;

export const DefaultButton = styled.a`
  & {
    border-radius: 50px;
    padding: 5.3% 8%;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.secundary.contrastText};
    background: ${(props) => props.theme.color.background};
    transition: all ease 0.3s;
  }

  &:hover {
    transform: scale(1.08);
  }
`;

export const Items = styled.article`
  & {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px 0;
    height: 100%;
    width: 100%;
    justify-content: space-around;
  }
`;

export const Item = styled.div`
    & {
        width: 260px;
        height: 200px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        border-radius: 20px;
        color: var(--white);
        transition: all ease 0.5s;
    }

    & h4{
        font-size: 18px;
        font-weight: 500;
        transform: translateY(110%);
        transition: all ease 0.5s;
    }

    & p {
        font-size: 13px;
        width: 250px;
        text-align: center;
        margin: 0 auto;
        opacity: 0;
        transition: all ease 0.5s;
        margin-top: 20px;
    }

    &:hover {
        background: var(--light-blue);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    }

    &:hover h4 {
        transform: translateY(-90%);
    }

    &:hover p {
        opacity: 1;
    }
`;
