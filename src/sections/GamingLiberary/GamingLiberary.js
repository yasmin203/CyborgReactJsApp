import React from "react"
import "./GamingLiberary.css"
import {
  SectionHeader,
  SectionWrapper,
  GamingLiberaryCard,
  PrimaryBtn,
} from "../../components/index"
import GamingData from "../../DataA/GamingData"
import {useEffect} from 'react'
import { useTranslation, Trans } from 'react-i18next';
import lang from '../../ArabicTranslation.json'
const GamingLiberary = (props) => {

     const { t, i18n } = useTranslation();
  //   useEffect(() => {
  //     const lang = navigator.language
  //     i18n.changeLanguage(lang)
  //   },[])
  // const lang =navigator.language


  const cards = GamingData.map((card) => {
    return (
      <GamingLiberaryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        DateAdded={card.date_added}
        HoursPlayed={card.hours_played}
        downloaded={card.downloaded}
      />
    )
  })

  return (
    <>
      <SectionWrapper style={{ position: "absolute" }}>
        <SectionHeader>
          <em>your gaming</em> liberary <br />
        </SectionHeader>
        <div className='gaming-liberary-cards'>{cards}</div>
      </SectionWrapper>
      <center>
        <PrimaryBtn>{t('translation:View Your Liberary')}</PrimaryBtn>
      </center>
    </>
  )   
}

export default GamingLiberary
