import styled from 'styled-components';
import { DonateButton } from '../styles/GlobalStyles';
import greenwoodLogo from '../assets/images/greenwood-logo.svg';

const FooterContainer = styled.footer`
  background: white;
  padding: 3rem 2rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }

  @media (min-width: 1600px) {
    max-width: 1200px;
  }

  @media (min-width: 2000px) {
    max-width: 1600px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

const FooterLogo = styled.img`
  height: 32px;
  width: auto;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const FooterLink = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--brand-gray);
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--brand-green);
  }
`;

const FooterDonateButton = styled(DonateButton)`
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: left;
  }
`;

const FooterCopyright = styled.p`
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--brand-gray);
  margin: 0;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToInfo = () => {
    const element = document.getElementById('info-section');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <hr style={{ width: '100%', maxWidth: '1200px', border: '0.5px solid #e0e0e0', margin: '0 auto' }} />
    <FooterContainer>
      <FooterContent>
        <FooterLeft onClick={scrollToTop}>
          <FooterLogo src={greenwoodLogo} alt="Greenwood Logo" />
        </FooterLeft>
        
        <FooterRight>
          <FooterNav>
            <FooterLink onClick={scrollToInfo}>Info</FooterLink>
            <FooterLink onClick={scrollToContact}>Contact Us</FooterLink>
          </FooterNav>
          
          <a href="https://www.greenwoodcollege.org/support-the-greenspace-development" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <FooterDonateButton>Donate Now</FooterDonateButton>
          </a>
          
          <FooterCopyright>© Greenwood 2025</FooterCopyright>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
    </>
  );
};

export default Footer;
