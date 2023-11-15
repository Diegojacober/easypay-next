import Link from "next/link"
import { ButtonStyled, Container, Content, DefaultButton, DescriptionArea, DescriptionButtons, DescriptionText, DescriptionTitle, Item, Items, SectionTitle } from "./styled"

export default function Features() {
    return (
        <Container>
            <SectionTitle>Features</SectionTitle>

            <Content>
                <DescriptionArea>
                    <DescriptionTitle>Best features provided by <br /> EasyPay Bank</DescriptionTitle>
                    <DescriptionText>Alpha Bank stands out with its technological innovation,
                        providing personalized service, a wide range of financial products,
                        and a commitment to the community.
                        With a focus on security and ethics,
                        it's a reliable and modern choice for individuals and businesses.
                    </DescriptionText>

                    <DescriptionButtons>
                        <Link  href="/" passHref legacyBehavior>
                            <DefaultButton>Get started</DefaultButton>
                        </Link>

                        {/* prefetch */}
                        <Link href="/" passHref legacyBehavior>
                            <ButtonStyled>Learn more</ButtonStyled>
                        </Link>
                    </DescriptionButtons>
                </DescriptionArea>

                <Items>
                    <Item>
                        <h4>Technological Innovation</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis qui, omnis voluptates aliquid nobis illo reiciendis</p>
                    </Item>

                    <Item>
                        <h4>Protection</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis qui, omnis voluptates aliquid nobis illo reiciendis</p>
                    </Item>

                    <Item>
                        <h4>Flexibility</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis qui, omnis voluptates aliquid nobis illo reiciendis</p>
                    </Item>

                    <Item>
                        <h4>Transparency</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis qui, omnis voluptates aliquid nobis illo reiciendis</p>
                    </Item>
                </Items>
            </Content>
        </Container>
    )
}