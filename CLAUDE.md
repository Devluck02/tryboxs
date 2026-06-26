# Project Name: TryBoxs

## Project Description
- **Type:** Affiliate Marketing E-commerce Web App
- **Core Concept:** Yeh ek affiliate marketing platform hai jahan products list hote hain aur users ke feedback, genuine buying, aur redirects ko track/manage kiya jata hai.

## Tech Stack
- Framework: Next.js (App Router)
- Language: JavaScript 
- Styling: Tailwind CSS
- State Management: React Hooks (useState, useContext), Redux Toolkit
- Backend: Node.js, Express.js
- Database: MongoDB

## Build & Run Commands
- Start dev server: `npm run dev`
- Build project: `npm run build`
- Run linter: `npm run lint`

## Next.js Coding Guidelines
- **App Router First:** Hamesha `app/` directory ka use karo. Naye conventions (page.js, layout.js, loading.js) follow karne hain. `pages/` directory use nahi karni.
- **Server Components:** By default har component ko Server Component rakho. 
- **Client Components:** Sirf tabhi `"use client"` lagao jab hooks (`useState`, `useEffect`, `useRouter`) ya browser events (onClick) ka use karna ho.
- **Data Fetching:** Naye Server Actions aur React ke native `fetch` ka use karo. 
- **Styling Rules:** Koi external CSS file mat banao. Hamesha Tailwind CSS utility classes ka use karo responsive design ke liye.

## Backend & Database Guidelines (Crucial)
- **Backend Integration Mindset:** Jab bhi koi feature ya frontend component process karo, to hamesha yeh dhyan me rakhkar design karo ki isme backend (Node.js + Express.js) aur database (MongoDB) integrate hoga.
- **Scalability & Optimization:** Code likhte waqt scalability aur performance optimization ka poora dhyan rakhna hai. API calls, data structure aur state management ko efficient banana hai.
- **Best Practices:** Clean code principles, proper error handling, async/await ka sahi use, aur secure data flow jaise best practices ko hamesha follow karna hai takiv future me backend integration smooth ho.

## File Structure & Naming
- Components: PascalCase use karo (jaise `Navbar.jsx` ya `UserProfile.jsx`).
- Folder names: lowercase me rakho.
- Reusable components ko `components/ui` folder me rakho.