import React from "react"
import "./MostPopular.css"
import {Card,SectionHeader, SectionWrapper} from '../../components/index'

import popular_01 from "../../assets/images/popular-01.jpg"
import popular_02 from "../../assets/images/popular-02.jpg"
import popular_03 from "../../assets/images/popular-03.jpg"
import popular_04 from "../../assets/images/popular-04.jpg"
import popular_05 from "../../assets/images/popular-05.jpg"
import popular_06 from "../../assets/images/popular-06.jpg"
import popular_07 from "../../assets/images/popular-07.jpg"
import popular_08 from "../../assets/images/popular-08.jpg"

// {console.log(image)}
const MostPopular = (props) => {
  return (
    <>
      <SectionWrapper>
    <SectionHeader><em>most popular</em> right now </SectionHeader>
      <div className='most-popular-items'>
        <Card img={popular_01} title="fortnite"  category="sandbox"    rate="4.5"   download="5.6"  />
      <Card   img={popular_02}   title="pubg"  category="stream-x"    rate="4.2"   download="1.1"  />
      <Card   img={popular_03}   title="dota 2"  category="legendary"    rate="2.5"   download="3.2"  />
      <Card   img={popular_04}   title="cs-go"  category="battle s"    rate="3.9"   download="2.1"  />
      <Card   img={popular_05}   title="dota 2"  category="legendary"    rate="2.3"   download="1.1"  />
      <Card   img={popular_06}   title="pubge"  category="stream x"    rate="4.4"   download="4.5"  />
      <Card   img={popular_07}   title="fortnaite"  category="stream"    rate="4.5"   download="5.6"  />
      <Card   img={popular_08}   title="battle S"  category="battles"    rate="2.3"   download="1.4"  />
      </div>
      </SectionWrapper>
</>
  
  )
}

export default MostPopular
