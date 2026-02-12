import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';
import interactiveMap from '../assets/images/photos/interactive-map.jpg';

const MapContainer = styled.section`
  padding: 0 2rem 4rem 2rem;
  background: white;

  @media (min-width: 1024px) {
    padding: 0 2rem 4rem 2rem;
  }

  @media (min-width: 1600px) {
    padding: 0 4rem 4rem 4rem;
  }

  @media (min-width: 2000px) {
    padding: 0 6rem 4rem 6rem;
  }
`;

const MapContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; 
  background: url(${interactiveMap}) center/cover no-repeat;
  border-radius: 16px;
  /* overflow: hidden; */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding-bottom: 56.25%; 
  }
`;

const InteractivePoint = styled.div`
  position: absolute;
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.size === '32px' ? '16px' : props.size === '28px' ? '14px' : '12px'};
    height: ${props => props.size === '32px' ? '16px' : props.size === '28px' ? '14px' : '12px'};
    background: ${props => props.tier === 'medium' ? 'var(--brand-navy)' : 'var(--brand-green)'};
    border-radius: 50%;
    z-index: 3;
  }

  & .outer-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.size || '24px'};
    height: ${props => props.size || '24px'};
    border: 2px solid ${props => props.tier === 'medium' ? 'var(--brand-navy)' : 'var(--brand-green)'};
    border-radius: 50%;
    z-index: 1;
    animation: radiate 2s ease-in-out infinite;
    animation-delay: ${props => props.animationDelay || '0s'};
  }
  
  @keyframes radiate {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.8;
    }
    80% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0;
    }
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: ${props => props.tier === 'medium' ? 'var(--brand-navy)' : 'var(--brand-green)'};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  z-index: 100;
  width: 300px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  transform: translateY(20px) scale(0.95);
  pointer-events: none;
  transform-origin: center bottom;
  
  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }
`;

const TooltipTitle = styled.h4`
  font-family: var(--font-display);
  font-size: 1.55rem;
  color: white;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
  width: 100%;
`;

const TooltipHint = styled.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: white;
  margin: 0;
  opacity: 0.8;
  font-style: italic;
`;

const TooltipAmount = styled.div`
  font-family: var(--font-display);
  font-size: 1rem;
  color: white;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  opacity: 0.9;
`;

const SeeOpportunityButton = styled.button`
  background: transparent;
  color: white;
  border: 0.5px solid white;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: white;
    color: var(--brand-green);
    transform: translateY(-1px);
  }
`;

const InteractiveMap = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: window.innerWidth / 2, y: 250});
  const [hideTimeout, setHideTimeout] = useState(null);

  const donorOpportunities = [
    {
      id: 'turf-field',
      name: 'The Greenwood Green (Turf Field)',
      amount: '$1,000,000',
      position: { top: '50%', left: '17.5%' },
      size: '32px',
      animationDelay: '0s',
      sectionId: 'turf-field-opportunity',
      tier: 'top'
    },
    {
      id: 'sign-bench',
      name: 'Greenwood Sign & Bench',
      amount: '$500,000',
      position: { top: '61%', left: '30%' },
      size: '28px',
      animationDelay: '0.3s',
      sectionId: 'sign-bench-opportunity',
      tier: 'top'
    },
    {
      id: 'gate',
      name: 'The Greenwood Gate',
      amount: '$250,000',
      position: { top: '58%', left: '26.5%' },
      size: '28px',
      animationDelay: '0.6s',
      sectionId: 'gate-opportunity',
      tier: 'top'
    },
    {
      id: 'flood-lighting',
      name: 'Flood Lighting',
      amount: '$250,000',
      position: { top: '58%', right: '63%' },
      size: '28px',
      animationDelay: '0.9s',
      sectionId: 'flood-lighting-opportunity',
      tier: 'top'
    },
    {
      id: 'west-garden',
      name: 'West Gathering Garden',
      amount: '$150,000',
      position: { top: '62%', left: '42.5%' },
      size: '24px',
      animationDelay: '1.2s',
      sectionId: 'west-garden-opportunity',
      tier: 'medium'
    },
    {
      id: 'east-garden',
      name: 'East Gathering Garden',
      amount: '$150,000',
      position: { top: '31%', left: '29%' },
      size: '24px',
      animationDelay: '1.5s',
      sectionId: 'east-garden-opportunity',
      tier: 'medium'
    },
    {
      id: 'mesh-netting',
      name: 'Mesh Safety Netting',
      amount: '$100,000',
      position: { top: '28%', left: '51.2%' },
      size: '20px',
      animationDelay: '1.8s',
      sectionId: 'mesh-netting-opportunity',
      tier: 'medium'
    },
    {
      id: 'feature-bench',
      name: 'Greenwood Feature Bench',
      amount: '$100,000',
      position: { top: '56%', left: '33%' },
      size: '20px',
      animationDelay: '2.1s',
      sectionId: 'feature-bench-opportunity',
      tier: 'medium'
    },
    {
      id: 'social-space',
      name: 'Social Space',
      amount: '$100,000',
      position: { top: '25%', left: '48%' },
      size: '20px',
      animationDelay: '2.4s',
      sectionId: 'social-space-opportunity',
      tier: 'medium'
    }
  ];

  const handlePointHover = (opportunity, event) => {
   
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    
    setActiveTooltip(opportunity.id);
    const rect = event.currentTarget.getBoundingClientRect();
    const mapRect = event.currentTarget.closest('.map-wrapper')?.getBoundingClientRect();
    
    if (mapRect) {
      setTooltipPosition({
        x: rect.left - mapRect.left + rect.width / 2,
        y: rect.top - mapRect.top - 20
      });
    }
  };

  const handlePointLeave = () => {
   
    const timeout = setTimeout(() => {
      setActiveTooltip(null);
    }, 300);
    setHideTimeout(timeout);
  };

  const handleTooltipEnter = () => {
   
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
  };

  const handleTooltipLeave = () => {
   
    setActiveTooltip(null);
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
  };

  const handleSeeOpportunity = (opportunity) => {
    const section = document.getElementById(opportunity.sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveTooltip(null);
  };

  return (
    <MapContainer>
      <MapContent>
        <MapWrapper className="map-wrapper">
          {/* Interactive Points */}
          {donorOpportunities.map((opportunity) => (
            <InteractivePoint
              key={opportunity.id}
              style={{
                top: opportunity.position.top,
                left: opportunity.position.left,
                right: opportunity.position.right
              }}
              size={opportunity.size}
              tier={opportunity.tier}
              animationDelay={opportunity.animationDelay}
              onMouseEnter={(e) => handlePointHover(opportunity, e)}
              onMouseLeave={handlePointLeave}
              onClick={() => handleSeeOpportunity(opportunity)}
            >
              <div className="outer-ring"></div>
            </InteractivePoint>
          ))}
          <Tooltip
            className={activeTooltip ? 'visible' : ''}
            tier={donorOpportunities.find(o => o.id === activeTooltip)?.tier}
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              transform: 'translateX(-50%)'
            }}
            onMouseEnter={handleTooltipEnter}
            onMouseLeave={handleTooltipLeave}
          >
            <TooltipTitle>
              {donorOpportunities.find(o => o.id === activeTooltip)?.name}
            </TooltipTitle>
            <TooltipHint>
              Click to see opportunity
            </TooltipHint>
          </Tooltip>
        </MapWrapper>
      </MapContent>
    </MapContainer>
  );
};

export default InteractiveMap;
