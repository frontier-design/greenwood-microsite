import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StatsContainer = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const StatsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme?.tablet || '768px'}) {
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: ${props => props.theme?.mobile || '480px'}) {
    gap: 1.5rem;
  }

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 120px;

  @media (max-width: ${props => props.theme?.tablet || '768px'}) {
    flex: 0 1 auto;
    min-width: 100px;
  }

  @media (max-width: ${props => props.theme?.mobile || '480px'}) {
    min-width: auto;
  }
`;

const StatNumber = styled.div`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 3rem);
  font-weight: 700;
  color: var(--brand-green);
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (min-width: 1600px) {
    font-size: clamp(2.5rem, 6vw, 3rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(3rem, 6vw, 3.5rem);
  }
`;

const StatDescription = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--brand-gray);
  line-height: 1.4;
  margin: 0;
  max-width: 150px;

  @media (min-width: 1600px) {
    font-size: clamp(0.875rem, 2.5vw, 1rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
  }
`;

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      number: '+250',
      description: 'students using the space daily',
      target: 250,
      prefix: '+'
    },
    {
      number: '40+',
      description: 'HPE classes weekly',
      target: 40,
      suffix: '+'
    },
    {
      number: '20',
      description: 'new trees planted',
      target: 20
    },
    {
      number: '84%',
      description: 'of students participate in athletics',
      target: 84,
      suffix: '%'
    },
    {
      number: '200-250',
      description: 'hours of monthly field use',
      target: 250,
      prefix: '200-'
    }
  ];

  useEffect(() => {
    // Animate stats once on component mount
    if (!hasAnimated) {
      setHasAnimated(true);
      animateStats();
    }
  }, []); // Empty dependency array - only runs once on mount

  const animateStats = () => {
    stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = stat.target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        
        if (step >= steps) {
          current = stat.target;
          clearInterval(timer);
        }

        setAnimatedStats(prev => ({
          ...prev,
          [index]: Math.floor(current)
        }));
      }, duration / steps);
    });
  };

  const formatStatNumber = (stat, index) => {
    if (!hasAnimated || !(index in animatedStats)) {
      return stat.number;
    }

    const value = animatedStats[index];
    const prefix = stat.prefix || '';
    const suffix = stat.suffix || '';

    if (stat.prefix === '200-') {
      return `200-${value}`;
    }

    return `${prefix}${value}${suffix}`;
  };

  return (
    <StatsContainer ref={statsRef}>
      <StatsContent>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{formatStatNumber(stat, index)}</StatNumber>
              <StatDescription>{stat.description}</StatDescription>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
