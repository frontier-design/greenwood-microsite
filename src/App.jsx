import { Layout, LandingHero, Navbar, InfoSection, StatsSection, TopTierDonorOpportunity, MediumTierDonorOpportunity, OtherDonorOpportunities, ContactForm, Footer, InteractiveMap } from './components';
import styled from 'styled-components';
import leftOverlay from './assets/images/photos/left-overlay.jpg';
import rightOverlay from './assets/images/photos/right-overlay.jpg';

const ImagesSection = styled.section`
  position: relative;
  display: flex;
  min-height: 550px;
  margin: 5vw 0px;

  @media (max-width: 768px) {
    min-height: 250px;
    margin: 5vw 0 2vw 0;
  }

  @media (max-width: 480px) {
    margin: 5vw 0 1vw 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }

  @media (min-width: 1600px) {
    max-width: 1200px;
    height: 600px
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
    height: 800px;
  }
`;

const LeftImage = styled.img`
  position: absolute;
  width: 50%;
  top: 0;
  left: 5%;
  z-index: 2;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const RightImage = styled.img`
  position: absolute;
  width: 50%;
  top: 25%;
  right: 5%;
  z-index: 1;
  border-radius: 12px;
  object-fit: cover;
`;

function App() {
  return (
    <Layout>
      <Navbar />
      <LandingHero />
      <InteractiveMap />
      <InfoSection />
      <StatsSection />
      <ImagesSection>
        <ImageContainer>
          <LeftImage 
            src={leftOverlay}
            alt="Flag football team celebrating with medals"
          />
          <RightImage 
            src={rightOverlay}
            alt="Coaching session with students on field"
          />
        </ImageContainer>
      </ImagesSection>
      <TopTierDonorOpportunity />
      <MediumTierDonorOpportunity />
      <OtherDonorOpportunities />
      <ContactForm />
      <Footer />
    </Layout>
  );
}

export default App;
