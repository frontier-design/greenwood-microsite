import styled from 'styled-components';
import { DonateButton, Description } from '../styles/GlobalStyles';
// import featureBench from '../assets/images/donor/medium-tier/feature-bench.jpg';
// import social from '../assets/images/donor/medium-tier/social.jpg';

const HeroContainer = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1rem 2rem 1rem;
  background: white;
  position: relative;
  overflow: hidden;

  @media (min-width: 1600px) {
    min-height: 40vh;
  }

  @media (min-width: 2000px) {
    min-height: 50vh;
  }
`;

const FloatingImage = styled.div`
  position: absolute;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FloatingImage1 = styled(FloatingImage)`
  width: 160px;
  height: 110px;
  top: 20%;
  left: 10%;
  animation: float 6s ease-in-out infinite;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatingImage2 = styled(FloatingImage)`
  width: 140px;
  height: 100px;
  top: 50%;
  right: 15%;
  animation: float 8s ease-in-out infinite reverse;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatingImage3 = styled(FloatingImage)`
  width: 130px;
  height: 90px;
  bottom: 25%;
  left: 15%;
  animation: float 7s ease-in-out infinite;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 2;

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  color: var(--brand-green);

  @media (min-width: 1600px) {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(3rem, 8vw, 5rem);
  }
`;

const LandingHero = () => {
  const scrollToDonorOpportunities = () => {
    const element = document.getElementById('top-tier-donor-opportunity');
    if (element) {
      const navbarHeight = 80; // Approximate navbar height + padding
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <HeroContainer>
      {/* <FloatingImage1>
        <img src={featureBench} alt="Feature bench at Greenwood" />
      </FloatingImage1>
      <FloatingImage2>
        <img src={social} alt="Social gathering space" />
      </FloatingImage2>
      <FloatingImage3>
        <img src={featureBench} alt="Community space" />
      </FloatingImage3> */}
      
      <HeroContent>
        <Title>
          GREENWOOD<br />GREENSPACE
        </Title>
        <Description>
          Greenwood's Greenspace Project is transforming newly acquired land into a hub for sports, experiential education, learning, play, and connection.
        </Description>
        <DonateButton onClick={scrollToDonorOpportunities}>Donate Now</DonateButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default LandingHero;
