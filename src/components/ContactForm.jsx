import styled from 'styled-components';
import { SectionTitle, DonateButton } from '../styles/GlobalStyles';

const ContactFormContainer = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const ContactFormContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 1600px) {
    max-width: 1200px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--brand-gray);
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--brand-gray);
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--brand-navy);
    box-shadow: 0 0 0 3px rgba(0, 18, 150, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--brand-gray);
  background: white;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--brand-navy);
    box-shadow: 0 0 0 3px rgba(0, 18, 150, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled(DonateButton)`
  align-self: center;
  background: var(--brand-navy);
  color: white;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background: #001a7a;
    transform: translateY(1px);
  }
`;

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log('Form submitted');
  };

  return (
    <ContactFormContainer id="contact-form">
      <ContactFormContent>
        <SectionHeader>
          <SectionTitle color="var(--brand-navy)">
            Have a Question?<br />
            We'd Love to Hear From You.
          </SectionTitle>
        </SectionHeader>

        <FormContainer onSubmit={handleSubmit}>
          <FormRow>
            <FormField>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </FormField>

            <FormField>
              <FormLabel htmlFor="email">E-Mail</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </FormField>
          </FormRow>

          <FormField>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              placeholder="Tell us about your question or inquiry..."
              required
            />
          </FormField>

          <SubmitButton type="submit">
            Contact Us
          </SubmitButton>
        </FormContainer>
      </ContactFormContent>
    </ContactFormContainer>
  );
};

export default ContactForm;
