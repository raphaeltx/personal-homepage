# Personal Homepage

Personal website built with Next.js.

## Features

- ⚡ Built with Next.js 16 (App Router)
- 🎨 Tailwind CSS v4 for styling
- 🌓 Dark/Light theme with system preference support
- 🌐 Language support with i18n (English and Portuguese)
- 📱 Fully responsive design
- ⚙️ TypeScript for type safety
- 🎯 Zero-config setup

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
│   │   ├── theme-provider/
│   │   ├── theme-toggle/
│   │   └── terminal/
│   ├── about/
│   ├── layout.tsx
│   └── page.tsx
├── assets/
│   └── styles/
│       └── globals.css
├── public/
└── package.json
```
