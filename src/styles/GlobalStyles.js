import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Graphik';
        src: url('/assets/fonts/Graphik-Regular.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    :root {
        --brand-green: #01AB4F;
        --brand-green-dark:rgb(0, 113, 49);
        --brand-navy: #001296;
        --brand-gray: #555759;

        --font-body: 'Graphik', sans-serif;
        --font-display: 'museo-slab', serif;
        --font-weight: 400;

        /* button */
        --button-radius: 4px; 
        --button-padding: 0.75rem 0.875rem;

        /* breakpoints - will change or get rid of it probably */
        --mobile: 480px;
        --tablet: 768px;
        --desktop: 1024px;
    }

    *, *::before, *::after { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;
    }

    body {
        font-family: var(--font-body);
        color: var(--brand-gray);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-display);
    }

    p{
        line-height: 1.45;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    button {
        width: fit-content;
        border: none;
        font-family: inherit;
        border-radius: var(--button-radius);
        padding: var(--button-padding);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: var(--font-display);
    }
`;

export const DonateButton = styled.button`
  background: var(--brand-green);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(1px);
    background: var(--brand-green-dark);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (min-width: 1600px) {
    font-size: 1.1rem;
  }

  @media (min-width: 2000px) {
    font-size: 1.2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 2.8vw, 4rem);
  color: ${(props) => props.color || "var(--brand-green)"};
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;

  @media (min-width: 1600px) {
    font-size: clamp(2.5rem, 2.5vw, 3rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(3rem, 2.5vw, 3.5rem);
  }
`;

export const SectionSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 2.5vw, 1.2rem);
  color: ${(props) => props.color || "var(--brand-green)"};
  margin: 0;
  text-align: center;

  @media (min-width: 1600px) {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  }
`;

export const Description = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1rem, 3vw, 1.1rem);
  color: var(--brand-gray);
  line-height: 1.45;
  max-width: 500px;
  margin: 0;

  @media (min-width: 1600px) {
    font-size: clamp(1.15rem, 3vw, 1.35rem);
    max-width: 800px;
  }

  @media (min-width: 2000px) {
    font-size: clamp(1.5rem, 3vw, 1.35rem);
    max-width: 1000px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
`;

export const GridItemImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
`;

export const GridItemContent = styled.div`
  background: ${(props) => props.backgroundColor || "var(--brand-green)"};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const GridItemTitle = styled.h4`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: white;
  margin: 0;
  font-weight: 700;
  width: 90%;
`;

export const GridItemDescription = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: white;
  line-height: 1.45;
  margin: 0;
`;

export const GridItemAmount = styled.div`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: white;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const GridDonateButton = styled.button`
  background: white;
  color: ${(props) => props.textColor || "var(--brand-green)"};
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: var(--button-radius);
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    background: #f0f0f0;
    transform: translateY(1px);
  }
`;

export default GlobalStyles;
