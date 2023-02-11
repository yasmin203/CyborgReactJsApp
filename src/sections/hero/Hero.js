import { PrimaryBtn } from '../../components'
import './Hero.css'

const Hero = () => {
  return (
    <div className='main-hero'>
      <div className="hero-text">
        <h6 className="hero-title">Welcome To Cyborg </h6>
          <h1 className="hero-subtitle">
            <span>BROWSE</span> OUR POPULAR GAMES HERE
          </h1>
          <PrimaryBtn>Browse Now</PrimaryBtn>
          </div>
    </div>
  )
}

export default Hero