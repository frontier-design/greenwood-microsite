# Greenwood Web Microsite

A modern, responsive microsite for the Greenwood project built with React and Vite.

## Features

- Interactive donor opportunity sections
- Functional contact form with email notifications
- Responsive design
- Modern UI with styled-components

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Get a free Web3Forms access key from [https://web3forms.com](https://web3forms.com)
   - Add your access key to `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. Run the development server:
```bash
npm run dev
```

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) to send emails to `ytoprak@frontier.is`. 

To set up:
1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account (no credit card required)
3. Create a new access key
4. Add the access key to your `.env` file as `VITE_WEB3FORMS_ACCESS_KEY`

The form will:
- Send submissions to ytoprak@frontier.is
- Display success/error messages to users
- Clear the form on successful submission
- Include the sender's name, email, and message

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for deployment with GitHub Pages via GitHub Actions. 

### Setting up GitHub Secrets for Deployment

For the contact form to work in production, you need to add your Web3Forms access key as a GitHub secret:

1. Go to your GitHub repository settings
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Name: `VITE_WEB3FORMS_ACCESS_KEY`
5. Value: Your Web3Forms access key
6. Click **Add secret**

Once the secret is added, push to the `main` branch to trigger an automatic deployment.
