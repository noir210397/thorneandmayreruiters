A modern Next.js frontend application for displaying job listings from the Job Agency API.
This project currently focuses on the jobs module, allowing users to fetch and view available jobs from the backend service.

The app is built with Next.js 15, React 19, TypeScript, and TanStack Query, with a lightweight and scalable structure ready for future expansion into shifts, bookings, authentication, and client management.

Overview

This frontend is designed as the client-facing layer of the Job Agency platform.
At the moment, it consumes the Jobs API and presents job data in a clean, responsive interface.

The current goal of the project is to:

Fetch jobs from the backend API
Display job listings in a structured UI
Build a reusable frontend foundation for future modules
Prepare the app for scaling into a full agency management system
Current Features
Fetch job listings from the Job Agency API
Display available jobs in a responsive interface
Manage server state using TanStack Query
Handle API requests with Axios
Use reusable UI patterns for future scalability
Built with TypeScript for safer development
Tech Stack
Frontend
Next.js 15 – React framework for server-rendered and modern web applications
React 19 – UI library
TypeScript – Static typing and maintainability
Tailwind CSS 4 – Utility-first styling
tailwind-merge – Utility helper for merging Tailwind classes
Data Fetching
Axios – HTTP client for API requests
@tanstack/react-query – Data fetching, caching, and async state management
UI Utilities
@radix-ui/react-accordion – Accessible accordion components
react-icons – Icon library for UI elements
Current Scope

This app currently supports only the Jobs part of the backend API.

Connected Endpoint
GET /api/jobs – Fetch all jobs

As the backend grows, this frontend can be extended to support:

Authentication
Shift management
Booking management
Client dashboards
Role-based protected pages
