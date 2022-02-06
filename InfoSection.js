import React from 'react'
import { Container,Button }from '../../GlobalStyle'
import { 
   InfoSec,
   InfoRow,
   InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
    ImgWrapper
    } from './InfoSectionstyle'
import { Link } from 'react-router-dom' 


const InfoSection = ({
    primary,
    lightBg,
    imgStart,
    lightTextDesc,
    lightTopLine, 
    buttonLabel, 
    description,
    headline,
    lightText,
    topLine,
    start,
    alt,
    img
    }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart0 = { imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine= {lightTopLine}>{topLine} </TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc = {lightTextDesc} > {description}</Subtitle>
                                <Link to= 'www.facebook.com/Bulus-Gebang-Purworejo-554112768036520/?_rdc=2&_rdr'>
                                    <Button big fontBig  > {buttonLabel} </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn> 
                            <ImgWrapper start = { start}>
                                <Img src = {img} alt ={alt} />
                            </ImgWrapper>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;
