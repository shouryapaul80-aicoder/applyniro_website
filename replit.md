# ApplyNiro Marketing Website

## Overview
Marketing website for ApplyNiro — a job application automation SaaS for fresh grads and early-career professionals. The site promotes features like auto-fill applications, smart outreach emails, daily job alerts (WhatsApp/Google Sheets), and an AI CV chatbot.

## Tech Stack
- **Frontend**: React + Vite + Tailwind CSS v4 + wouter routing + framer-motion
- **Backend**: Express.js
- **Integration**: Google Sheets API (via Replit connector) for waitlist form submissions
- **Design**: Dark Navy (#1E2B3A), Teal (#2C9797), Blue (#3A7EC1) palette. Poppins headings, Inter body.

## Project Structure
- `client/src/pages/` — Home, HowItWorks, Features, Integrations, Waitlist, FAQ, Contact
- `client/src/components/layout/` — Navbar, Footer, Layout
- `client/src/components/forms/WaitlistForm.tsx` — Sign-up form with validation
- `client/src/assets/` — Logo, hero image, dashboard mockup
- `client/public/` — demo-video.mp4, privacy-policy.pdf, terms-of-service.pdf
- `server/routes.ts` — POST /api/waitlist endpoint
- `server/googleSheets.ts` — Google Sheets client (Replit connector)

## Google Sheets Integration
- Spreadsheet ID: `1Rg4K7jqA7rlt7gdnRMox7UsIXMkLGhJeXjX9WnhJXvA`
- Sheet: Sheet1
- Columns: full_name, email_address, country, phone_number, years_experience, industry
- Uses Replit Google Sheets connector for OAuth

## Contact
- Email: office@applyfirst.com / contact@applyniro.com
