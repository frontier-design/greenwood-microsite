import styled from 'styled-components';
import { DonateButton, SectionTitle, SectionSubtitle, GridItem, GridItemImage, GridItemContent, GridItemTitle, GridItemDescription, GridItemAmount, GridDonateButton } from '../../styles/GlobalStyles';
import topTierData from '../../data/top-tier-donor-opportunities.json';
import turfField from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_Turf_Field_Sign.jpg';
import signBench from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_sign_and_bench.jpg';
import floodLighting from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_Flood_Lighting.jpg';
import greenwoodGate from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_gate.jpg';

const DonorOpportunityContainer = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const DonorOpportunityContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const MainOpportunity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 300px;
    object-fit: cover;
  }

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const MainOpportunityTitle = styled.h3`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--brand-green);
  margin: 0;
  font-weight: 700;
`;

const MainDescription = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: var(--brand-gray);
  line-height: 1.45;
  margin: 0;
`;

const MainAmount = styled.div`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--brand-green);
  font-weight: 700;
  margin: 0.5rem 0;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  grid-template-rows: auto auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const FullWidthGridItem = styled.div`
  grid-column: span 2;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TopTierDonorOpportunity = () => {
  const { tier, subtitle, mainOpportunity, gridOpportunities } = topTierData;

  return (
    <DonorOpportunityContainer id="top-tier-donor-opportunity">
      <DonorOpportunityContent>
        <SectionHeader>
          <SectionTitle>{tier}<br />Donor Opportunities</SectionTitle>
          <SectionSubtitle>{subtitle}</SectionSubtitle>
        </SectionHeader>

        <MainOpportunity id={mainOpportunity.id}>
          <MainImage 
            src={turfField} 
            alt={mainOpportunity.alt}
          />
          <MainContent>
            <div>
            <MainOpportunityTitle dangerouslySetInnerHTML={{ __html: mainOpportunity.title }} />
            </div>
           <div>
           <MainDescription>
              {mainOpportunity.description}
            </MainDescription>
            <MainAmount>{mainOpportunity.amount}</MainAmount>
            <DonateButton>{mainOpportunity.buttonText}</DonateButton>
           </div>
          </MainContent>
        </MainOpportunity>

        {gridOpportunities.map((opportunity) => {
          if (opportunity.isFullWidth) {
            return (
              <FullWidthGridItem key={opportunity.id} id={opportunity.id}>
                <GridItemImage 
                  src={signBench} 
                  alt={opportunity.alt}
                />
                <GridItemContent backgroundColor="var(--brand-green)">
                  <GridItemTitle dangerouslySetInnerHTML={{ __html: opportunity.title }} />
                  <GridItemDescription>
                    {opportunity.description}
                  </GridItemDescription>
                  <GridItemAmount>{opportunity.amount}</GridItemAmount>
                  <GridDonateButton textColor="var(--brand-green)">{opportunity.buttonText}</GridDonateButton>
                </GridItemContent>
              </FullWidthGridItem>
            );
          }
          return null;
        })}

        <GridSection>
          {gridOpportunities.map((opportunity) => {
            if (!opportunity.isFullWidth) {
              return (
                <GridItem key={opportunity.id} id={opportunity.id}>
                  <GridItemImage 
                    src={opportunity.id === 'gate-opportunity' ? greenwoodGate : floodLighting} 
                    alt={opportunity.alt}
                  />
                  <GridItemContent backgroundColor="var(--brand-green)">
                    <GridItemTitle dangerouslySetInnerHTML={{ __html: opportunity.title }} />
                    <GridItemDescription>
                      {opportunity.description}
                    </GridItemDescription>
                    <GridItemAmount>{opportunity.amount}</GridItemAmount>
                    <GridDonateButton textColor="var(--brand-green)">{opportunity.buttonText}</GridDonateButton>
                  </GridItemContent>
                </GridItem>
              );
            }
            return null;
          })}
        </GridSection>
      </DonorOpportunityContent>
    </DonorOpportunityContainer>
  );
};

export default TopTierDonorOpportunity;
