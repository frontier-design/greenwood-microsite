import styled from 'styled-components';
import { SectionTitle, SectionSubtitle, GridDonateButton } from '../../styles/GlobalStyles';
import otherTierData from '../../data/other-donor-opportunities.json';

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

const OpportunitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
  
const OpportunityItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--brand-gray);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const OpportunityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const OpportunityTitle = styled.h4`
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: var(--brand-gray);
  margin: 0;
  font-weight: 700;

  @media (min-width: 1600px) {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(1.5rem, 3vw, 1.75rem);
  }
`;

const OpportunityDescription = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--brand-gray);
  line-height: 1.5;
  margin: 0;
  opacity: 0.8;

  @media (min-width: 1600px) {
    font-size: clamp(0.875rem, 2.5vw, 1rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
  }
`;

const OpportunityAmount = styled.div`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--brand-gray);
  font-weight: 700;
  margin: 0 2rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin: 0;
  }

  @media (min-width: 1600px) {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
  }
`;

const OtherDonorOpportunities = () => {
  const { tier, subtitle, opportunities } = otherTierData;

  return (
    <DonorOpportunityContainer>
      <DonorOpportunityContent>
        <SectionHeader>
          <SectionTitle color="var(--brand-gray)">{tier} <br /> Donor Opportunities</SectionTitle>
          <SectionSubtitle color="var(--brand-gray)">{subtitle}</SectionSubtitle>
        </SectionHeader>

        <OpportunitiesList>
          {opportunities.map((opportunity) => (
            <OpportunityItem key={opportunity.id}>
              <OpportunityInfo>
                <OpportunityTitle>{opportunity.title}</OpportunityTitle>
                <OpportunityDescription>
                  {opportunity.description}
                </OpportunityDescription>
              </OpportunityInfo>
              <OpportunityAmount>{opportunity.amount}</OpportunityAmount>
              <GridDonateButton 
                backgroundColor="var(--brand-gray)" 
                textColor="white"
                style={{ backgroundColor: 'var(--brand-gray)', color: 'white' }}
              >
                {opportunity.buttonText}
              </GridDonateButton>
            </OpportunityItem>
          ))}
        </OpportunitiesList>
      </DonorOpportunityContent>
    </DonorOpportunityContainer>
  );
};

export default OtherDonorOpportunities;
