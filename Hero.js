import React from 'react'
import { InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle } from './Herostyle'
import './Hero.css'

const Hero = ({primary,
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
    img}) => {
    return (
        <div className='hero'>
            
            <InfoRow>
                <InfoColumn>
                    <TextWrapper>
                        <Subtitle lightTextDesc = {lightTextDesc} > Desa Bulus terdiri dari 3
                         dusun 3 RW dan 13 RT dengan luas 227,5 Ha, dengan potensi perangkatnya terdiri dari Seorang Kepala Desa (Kades), satu orang Sekretaris Desa (Sekdes), lima orang kaur dan dua Kepala Dusun (Kadus) mempunyai jumlah penduduk 1.693 orang yang terdiri dari 794 orang laki-laki dan 899 orang perempuan, 
                        dan dengan jumlah Rumah Tangga Miskin (RTM) berjumlah 484 RTM.</Subtitle>
                    </TextWrapper>
                </InfoColumn> 
            <div className='content'>
                <p1>Desa Bulus</p1>
            </div>
            </InfoRow>
        </div>
    )
}

export default Hero