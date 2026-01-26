# Personal Homepage

Personal website built with Next.js.

## Features

- ⚡ Built with Next.js 16 (App Router)
- 🎨 Tailwind CSS v4 for styling
- 🌓 Dark/Light theme with system preference support
- 💻 Interactive terminal-style interface
- 📱 Fully responsive design
- ⚙️ TypeScript for type safety
- 🎯 Clean code architecture with component separation

## Tech Stack

- **Framework:** Next.js 16.1.4
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Theme Management:** next-themes
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd personal-homepage

# Install dependencies
pnpm install

# Run the development server:
pnpm run dev

# Open http://localhost:3000 with your browser to see the result.
```

## Building

To create an optimized production build, run:

```bash
pnpm run build
```

## Project Structure

```
personal-homepage/
├── app/
│   ├── components/
│   │   ├── about/
│   │   │   ├── About.tsx
│   │   │   ├── AsciiBanner.tsx
│   │   │   ├── CodeProperty.tsx
│   │   │   ├── CodeArrayProperty.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   └── FooterComments.tsx
│   │   ├── command-not-found/
│   │   │   └── CommandNotFound.tsx
│   │   ├── contact/
│   │   │   └── Contact.tsx
│   │   ├── help/
│   │   │   └── Help.tsx
│   │   ├── main-wrapper/
│   │   │   └── MainWrapper.tsx
│   │   ├── navbar/
│   │   │   └── Navbar.tsx
│   │   ├── skills/
│   │   │   └── Skills.tsx
│   │   ├── terminal/
│   │   │   └── Terminal.tsx
│   │   ├── terminal-input/
│   │   │   └── TerminalInput.tsx
│   │   ├── theme-provider/
│   │   │   └── ThemeProvider.tsx
│   │   ├── theme-toggle/
│   │   │   └── ThemeToggle.tsx
│   │   └── welcome/
│   │       ├── Welcome.tsx
│   │       ├── WelcomeGreeting.tsx
│   │       ├── HowItWorksSection.tsx
│   │       ├── BeginnerGuideSection.tsx
│   │       └── CallToAction.tsx
│   ├── constants/
│   │   ├── developerData.ts
│   │   └── welcomeData.ts
│   ├── context/
│   │   └── TerminalFocusContext.tsx
│   ├── utils/
│   │   └── dateCalculations.ts
│   ├── layout.tsx
│   └── page.tsx
├── assets/
│   └── styles/
│       └── globals.css
├── public/
└── package.json
```
