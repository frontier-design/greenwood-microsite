# Contact Form Setup Instructions

## Quick Setup Steps

### 1. Get Your Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email: **ytoprak@frontier.is**
4. You'll receive an email with your access key
5. Copy the access key (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Configure Local Development

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### 3. Test the Form

1. Open the site in your browser
2. Scroll to the contact form
3. Fill out the form and submit
4. Check the email: ytoprak@frontier.is

### 4. Configure for Production (GitHub Pages)

1. Go to your GitHub repository
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: Your Web3Forms access key
5. Click **Add secret**
6. Push to `main` branch to deploy

## Important Notes

- The access key is free and has no limits for reasonable use
- All form submissions will be sent to: ytoprak@frontier.is
- You can manage your access keys and view submissions at web3forms.com
- The form includes spam protection built-in
- No backend server required - it's completely static

## Troubleshooting

**Error: "Contact form is not configured"**
- The `.env` file is missing or the access key is not set
- Make sure you created `.env` and added `VITE_WEB3FORMS_ACCESS_KEY`
- Restart your dev server after adding the env variable

**Error: 400 Bad Request**
- The access key might be invalid
- Double-check you copied the entire key from Web3Forms
- Make sure there are no extra spaces in the `.env` file

**Not receiving emails**
- Check spam folder
- Verify the email address in your Web3Forms dashboard
- Log into web3forms.com to see if submissions are being recorded
