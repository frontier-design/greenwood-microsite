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
  font-size: clamp(1.25rem, 4vw, 2rem);
  color: var(--brand-gray);
  margin: 0;
  font-weight: 700;
  max-width: 30ch;
  margin-bottom: 0.15rem;
  line-height: 1.2;

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
  max-width: 60ch;

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
  white-space: nowrap;
  display: flex;
  align-items: center;
  line-height: 1;

  @media (min-width: 1600px) {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
  }
`;

const OpportunityActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const OtherDonorOpportunities = () => {
  const { opportunities } = otherTierData;

  const renderOpportunityButton = (opportunity) => {
    const isSold = opportunity.buttonText?.trim().toUpperCase() === 'SOLD';
    const button = (
      <GridDonateButton
        type="button"
        disabled={isSold}
        backgroundColor="var(--brand-gray)"
        textColor="white"
        sold={isSold}
        alignSelf="center"
      >
        {opportunity.buttonText}
      </GridDonateButton>
    );

    if (isSold) {
      return button;
    }

    const isMailTo = opportunity.buttonLink?.startsWith('mailto:');

    return (
      <a
        href={opportunity.buttonLink}
        target={isMailTo ? undefined : '_blank'}
        rel={isMailTo ? undefined : 'noopener noreferrer'}
        style={{ textDecoration: 'none' }}
      >
        {button}
      </a>
    );
  };

  return (
    <DonorOpportunityContainer>
      <DonorOpportunityContent>

        <OpportunitiesList>
          {opportunities.map((opportunity) => (
            <OpportunityItem key={opportunity.id} id={opportunity.id}>
              <OpportunityInfo>
                <OpportunityTitle>{opportunity.title}</OpportunityTitle>
                <OpportunityDescription>
                  {opportunity.description}
                </OpportunityDescription>
              </OpportunityInfo>
              <OpportunityActions>
                <OpportunityAmount>{opportunity.amount}</OpportunityAmount>
                {renderOpportunityButton(opportunity)}
              </OpportunityActions>
            </OpportunityItem>
          ))}
        </OpportunitiesList>
      </DonorOpportunityContent>
    </DonorOpportunityContainer>
  );
};

export default OtherDonorOpportunities;
