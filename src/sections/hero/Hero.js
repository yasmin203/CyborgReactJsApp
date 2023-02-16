import { PrimaryBtn } from '../../components'
import './Hero.css'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='main-hero'>
      <div className="hero-text">
        <h6 className="hero-title">{t("Welcome To Cyborg")}</h6>
          <h1 className="hero-subtitle">
            <span>{t("BROWSE")}</span> {t("OUR POPULAR GAMES HERE")}
          </h1>
          <PrimaryBtn>{t("Browse Now")}</PrimaryBtn>
          </div>
    </div>
  )
}

export default Hero