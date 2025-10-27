import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import greenwoodLogo from '../assets/images/greenwood-logo.svg';
import { DonateButton } from '../styles/GlobalStyles';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 2rem;
  width: 100%;
  margin: 0 auto;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  height: 32px;
  width: auto;

  @media (min-width: 1600px) {
    height: 30px;
  }

  @media (min-width: 2000px) {
    height: 40px;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${props => props.theme?.tablet || '768px'}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--brand-gray);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: fit-content;

  &:hover {
    color: var(--brand-green);
    background: rgba(0, 150, 0, 0.05);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--brand-gray);
  cursor: pointer;
  padding: 0rem;

  @media (max-width: ${props => props.theme?.tablet || '768px'}) {
    display: block;
  }
`;

const MobileMenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  right: 0;
  width: 220px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  padding: 1.25rem;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.75rem;
  z-index: 1000;
  animation: ${props => props.isOpen ? 'slideDown 0.3s ease' : 'none'};

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MobileNavLink = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--brand-gray);
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  width: fit-content;

  &:hover {
    color: var(--brand-green);
    background: rgba(0, 150, 0, 0.05);
  }
`;

const MobileDonateButton = styled(DonateButton)`
  margin-top: 0.5rem;
  align-self: stretch;
  font-size: 1rem;
  padding: 0.75rem 1rem;
`;

const DesktopDonateButton = styled(DonateButton)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileDonateButtonSmall = styled(DonateButton)`
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  min-width: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

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
    setIsMobileMenuOpen(false);
  };

  const scrollToInfo = () => {
    const element = document.getElementById('info-section');
    if (element) {
      const navbarHeight = 80; // Approximate navbar height + padding
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      const navbarHeight = 80; // Approximate navbar height + padding
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <NavContainer>
      <NavContent>
        <LogoSection onClick={scrollToTop}>
          <LogoIcon src={greenwoodLogo} alt="Greenwood Logo" />
        </LogoSection>
        
        <NavRight ref={mobileMenuRef}>
          <NavLinks>
            <NavLink onClick={scrollToInfo}>Info</NavLink>
            <NavLink onClick={scrollToContact}>Contact Us</NavLink>
          </NavLinks>
          
          <DesktopDonateButton onClick={scrollToDonorOpportunities}>Donate Now</DesktopDonateButton>
          
          <MobileDonateButtonSmall onClick={scrollToDonorOpportunities}>Donate</MobileDonateButtonSmall>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </MobileMenuButton>
          
          <MobileMenuDropdown isOpen={isMobileMenuOpen}>
            <MobileMenuLinks>
              <MobileNavLink onClick={scrollToInfo}>Info</MobileNavLink>
              <MobileNavLink onClick={scrollToContact}>Contact Us</MobileNavLink>
              <MobileDonateButton onClick={scrollToDonorOpportunities}>Donate Now</MobileDonateButton>
            </MobileMenuLinks>
          </MobileMenuDropdown>
        </NavRight>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
