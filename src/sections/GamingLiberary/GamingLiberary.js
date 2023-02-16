import React from "react"
import "./GamingLiberary.css"
import {
  SectionHeader,
  SectionWrapper,
  GamingLiberaryCard,
  PrimaryBtn,
} from "../../components/index"
import GamingData from "../../DataA/GamingData"
const GamingLiberary = (props) => {
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
        <PrimaryBtn>View Your Liberary</PrimaryBtn>
      </center>
    </>
  )
}

export default GamingLiberary
