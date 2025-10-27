import styled from 'styled-components';
import infoSectionImage from '../assets/images/photos/info-section.jpg';
import { DonateButton, Description } from '../styles/GlobalStyles';

const InfoContainer = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const InfoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${props => props.theme?.tablet || '768px'}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Heading = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(1rem, 5vw, 1rem);
  color: var(--brand-green);
  margin: 0;
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const InfoSection = () => {
  return (
    <InfoContainer id="info-section">
      <InfoContent>
        <TextColumn>
          <Heading>Info</Heading>
          <Description>
            In the Greenspace, our students can run on the incredible turf, gather with friends for fresh air under the pergola at lunch time, and connect with classmates on the turf-mound on a sunny day.
          </Description>
          <a href="https://www.greenwoodcollege.org/about/expanding-our-campus" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <DonateButton>Read More</DonateButton>
          </a>
        </TextColumn>
        
        <ImageColumn>
          <InfoImage 
            src={infoSectionImage}
            alt="Greenwood Greenspace"
          />
        </ImageColumn>
      </InfoContent>
    </InfoContainer>
  );
};

export default InfoSection;