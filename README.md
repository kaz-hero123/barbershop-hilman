# CREWCUT Studio

A modern, high-performance landing page application for CREWCUT Studio, designed with a focus on premium grooming services and a "Warm Neutral" aesthetic. Built as part of a professional portfolio showcasing modern web development practices.

## Overview

This project implements a custom landing page architecture tailored for local business conversion. It utilizes "The Ritual" narrative to position grooming services as a premium experience. The application features a custom UI components system built with Tailwind CSS v4 and fluid animations via Motion, ensuring a premium user experience while maintaining strict accessibility and performance standards.

## Technical Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS (v4)
- Animation: Motion
- Environment: Node.js

## Architecture & Optimizations

The application has been audited and optimized following industry standards:

- Performance: Implemented dynamic imports for below-the-fold components, minimizing initial load times and JavaScript payload.
- SEO & Discoverability: Full Open Graph and Twitter Card integration, dynamic sitemap generation, and strict robots.txt configuration for optimal local search indexing.
- Asset Optimization: Native Next.js Image component utilized across all graphical assets, enabling automatic WebP/AVIF format conversion, lazy loading, and accurate sizing directives.
- Maintainability: Centralized business data logic, strict ESLint configuration enforced for clean code, and modular component architecture.
- Accessibility: Integrated preferences for reduced motion and semantic HTML structure.

## Local Development

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kaz-hero123/barbershop-hilman.git
   cd barbershop-hilman
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application at http://localhost:3000.

## Configuration

Business logic and content can be modified in the central data configuration file without altering UI components. Update the `src/data/index.ts` file to modify:
- Business information (Name, Address, Operating Hours)
- Service offerings and pricing
- Team member profiles and portfolio images
- Testimonial data

For styling modifications, refer to `src/app/globals.css` where design tokens and theme variables are defined.

## Deployment

The application is configured for seamless deployment on standard Node.js hosting environments or platforms like Vercel. Ensure all build checks pass via the following command prior to deployment:

```bash
npm run build
```
