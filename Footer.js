import React from 'react'
import { Button } from '../../GlobalStyle'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink
} from './FooterStyle'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Pemerintah Desa Bulus Kec.Gebang - Kab.Purworejo
                </FooterSubHeading>
                <FooterSubText>
                    Kirim Pesan
                </FooterSubText>
                <Form>
                    <FormInput name ="email" type = "email " placeholder="Pesan" />
                        <Button fontBig>Kirim</Button>
             
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us:</FooterLinkTitle>
                        <FooterLink to='/Sign-Up'>How It Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>You</FooterLinkTitle>
                        <FooterLink to='/Sign-Up'>How It Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>And</FooterLinkTitle>
                        <FooterLink to='/Sign-Up'>How It Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>I</FooterLinkTitle>
                        <FooterLink to='/Sign-Up'>How It Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                    </FooterLinksItems><FooterLinksItems>
                        <FooterLinkTitle>Forever</FooterLinkTitle>
                        <FooterLink to='/Sign-Up'>How It Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer
