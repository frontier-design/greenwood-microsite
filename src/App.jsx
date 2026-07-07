import { Layout, LandingHero, Navbar, InfoSection, StatsSection, TopTierDonorOpportunity, MediumTierDonorOpportunity, OtherDonorOpportunities, ContactForm, Footer, InteractiveMap } from './components';

function App() {
  return (
    <Layout>
      <Navbar />
      <LandingHero />
      <InteractiveMap />
      <InfoSection />
      <StatsSection />
      <TopTierDonorOpportunity />
      <MediumTierDonorOpportunity />
      <OtherDonorOpportunities />
      <ContactForm />
      <Footer />
    </Layout>
  );
}

export default App;
