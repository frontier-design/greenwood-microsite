import { useState } from 'react';
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

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
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

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
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

  &:hover:not(:disabled) {
    background: #001a7a;
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 1rem;
  
  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    // Check if access key is configured
    if (!accessKey) {
      console.error('Web3Forms access key is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.');
      setStatusMessage({ 
        type: 'error', 
        text: 'Contact form is not configured. Please email us directly at katie.evans@greenwoodcollege.org' 
      });
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.target);
    
    // Add required fields for Web3Forms
    formData.append('access_key', accessKey);
    formData.append('subject', 'New Contact Form Submission - Greenwood Microsite');
    formData.append('from_name', 'Greenwood Microsite');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({ type: 'success', text: 'Thank you for your message! We\'ll get back to you soon.' });
        e.target.reset();
      } else {
        console.error('Web3Forms error:', data);
        setStatusMessage({ 
          type: 'error', 
          text: data.message || 'Something went wrong. Please try again or contact us directly at katie.evans@greenwoodcollege.org' 
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again or contact us directly at katie.evans@greenwoodcollege.org' });
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </FormField>

          {statusMessage && (
            <StatusMessage className={statusMessage.type}>
              {statusMessage.text}
            </StatusMessage>
          )}

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Contact Us'}
          </SubmitButton>
        </FormContainer>
      </ContactFormContent>
    </ContactFormContainer>
  );
};

export default ContactForm;
