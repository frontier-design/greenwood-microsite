import styled from 'styled-components';

const MainContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
};

export default Layout;
