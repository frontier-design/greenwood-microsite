import styled from 'styled-components';
import { DonateButton, SectionTitle, SectionSubtitle, GridItem, GridItemImage, GridItemContent, GridItemTitle, GridItemDescription, GridItemAmount, GridDonateButton } from '../../styles/GlobalStyles';
import mediumTierData from '../../data/medium-tier-donor-opportunities.json';
import westGatheringGarden from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_West_gathering_garden.jpg';
import eastGatheringGarden from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_East_gathering_garden.jpg';
import meshSafetyNetting from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_Mesh_Safety_Netting.jpg';
import greenwoodFeatureBench from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_Feature_Bench.jpg';
import socialSpace from '../../assets/images/Greenwood_UpdatedPictures/Greenwood_Social_Space.png';

const DonorOpportunityContainer = styled.section`
  padding: 2rem 2rem 4rem 2rem;
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

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  grid-column: 1 / -1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  grid-column: 1 / -1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CustomGridItemDescription = styled(GridItemDescription)`
  opacity: 0.85;
`;

const MediumTierDonorOpportunity = () => {
  const {topRowOpportunities, bottomRowOpportunities } = mediumTierData;

  const getImageSrc = (id) => {
    switch (id) {
      case 'west-garden-opportunity':
        return westGatheringGarden;
      case 'east-garden-opportunity':
        return eastGatheringGarden;
      case 'mesh-netting-opportunity':
        return meshSafetyNetting;
      case 'feature-bench-opportunity':
        return greenwoodFeatureBench;
      case 'social-space-opportunity':
        return socialSpace;
      default:
        return westGatheringGarden;
    }
  };

  return (
    <DonorOpportunityContainer id="medium-tier-donor-opportunity">
      <DonorOpportunityContent>
        <GridSection>
          {/* Top Row - 2 larger cards */}
          <TopRow>
            {topRowOpportunities.map((opportunity) => (
              <GridItem key={opportunity.id} id={opportunity.id}>
                <GridItemImage 
                  src={getImageSrc(opportunity.id)} 
                  alt={opportunity.alt}
                />
                <GridItemContent backgroundColor="var(--brand-navy)">
                  <GridItemTitle>{opportunity.title}</GridItemTitle>
                  <CustomGridItemDescription>
                    {opportunity.description}
                  </CustomGridItemDescription>
                  <GridItemAmount>{opportunity.amount}</GridItemAmount>
                  <a href={opportunity.buttonLink} target={opportunity.buttonLink.startsWith('mailto:') ? undefined : '_blank'} rel={opportunity.buttonLink.startsWith('mailto:') ? undefined : 'noopener noreferrer'} style={{ textDecoration: 'none' }}>
                    <GridDonateButton textColor="var(--brand-navy)">{opportunity.buttonText}</GridDonateButton>
                  </a>
                </GridItemContent>
              </GridItem>
            ))}
          </TopRow>

          {/* Bottom Row - 3 smaller cards */}
          <BottomRow>
            {bottomRowOpportunities.map((opportunity) => (
              <GridItem key={opportunity.id} id={opportunity.id}>
                <GridItemImage 
                  src={getImageSrc(opportunity.id)} 
                  alt={opportunity.alt}
                />
                <GridItemContent backgroundColor="var(--brand-navy)">
                  <GridItemTitle>{opportunity.title}</GridItemTitle>
                  <CustomGridItemDescription>
                    {opportunity.description}
                  </CustomGridItemDescription>
                  <GridItemAmount>{opportunity.amount}</GridItemAmount>
                  <a href={opportunity.buttonLink} target={opportunity.buttonLink.startsWith('mailto:') ? undefined : '_blank'} rel={opportunity.buttonLink.startsWith('mailto:') ? undefined : 'noopener noreferrer'} style={{ textDecoration: 'none' }}>
                    <GridDonateButton textColor="var(--brand-navy)">{opportunity.buttonText}</GridDonateButton>
                  </a>
                </GridItemContent>
              </GridItem>
            ))}
          </BottomRow>
        </GridSection>
      </DonorOpportunityContent>
    </DonorOpportunityContainer>
  );
};

export default MediumTierDonorOpportunity;
