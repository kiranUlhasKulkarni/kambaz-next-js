# Kambaz – Frontend

> A full-stack Learning Management System inspired by Canvas, built for Northeastern University's CS5610 Web Development course.

**Live Demo:** [kambaz-next-js.vercel.app](https://kambaz-next-js-blush.vercel.app/Account/Signin)  
**Backend Repo:** [kambaz-node-server](https://github.com/kiran-ulhas-kulkarni/kambaz-node-server-app)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## Overview

Kambaz is a feature-rich LMS that replicates core Canvas functionality. It supports two user roles — **Student** and **Faculty** — each with distinct capabilities across courses, modules, assignments, and quizzes. The frontend is a Next.js 14 App Router application using Redux Toolkit for global state management and React Bootstrap for UI components.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| State Management | Redux Toolkit |
| UI Library | React Bootstrap |
| Auth | Session-based (via backend API) |
| Deployment | Vercel |

---

## Features

### Authentication & Authorization
- Session-based login and registration
- Role-based access control: **Student** vs **Faculty**
- Protected routes and conditionally rendered UI components based on user role
- Profile management (view and edit own profile)

### Course Management
- Faculty can create, edit, and delete courses
- Students can browse available courses and enroll/unenroll
- Dashboard displays enrolled courses vs all available courses
- Course detail pages with image, name, and description

### Module System
- Faculty can create, edit, reorder, and delete modules within a course
- Lessons nested inside modules
- Module expand/collapse UI

### Assignment Management
- Faculty can create and manage assignments with due dates, point values, and submission groups
- Students can view assignment details within enrolled courses

### Quiz System
- Faculty can create quizzes with:
  - **Single Choice** questions
  - **Multiple Choice** questions
  - **Fill-in-the-Blank** questions (supports multiple correct blanks per question)
- Quizzes support publish/unpublish toggle
- Students can take quizzes with auto-grading
- Attempt tracking — each submission is stored with student answers and scores
- Multiple attempt support (configurable per quiz)

### Enrollment
- Many-to-many relationship between users and courses
- Students can enroll and unenroll from the dashboard

---

## Project Structure

```
kambaz-next-js/
├── app/                        # Next.js App Router
│   ├── Kambaz/
│   │   ├── Account/            # Login, Register, Profile pages
│   │   ├── Courses/
│   │   │   ├── [cid]/          # Dynamic course routes
│   │   │   │   ├── Assignments/
│   │   │   │   ├── Modules/
│   │   │   │   ├── Quizzes/
│   │   │   │   └── ...
│   │   ├── Dashboard/          # Enrolled + available courses view
│   │   └── store.ts            # Redux store
│   └── layout.tsx
├── public/
├── .env.local                  # Local environment variables
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Backend server running (see [backend repo](https://github.com/kiran-ulhas-kulkarni/kambaz-node-server-app))

### Installation

```bash
git clone https://github.com/kiran-ulhas-kulkarni/kambaz-next-js.git
cd kambaz-next-js
npm install
```

### Running Locally

```bash
npm run dev
```

App runs at `http://localhost:3000`.

Make sure your backend is running at `http://localhost:4000` or update `NEXT_PUBLIC_HTTP_SERVER` accordingly.

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
```

For production (Vercel), set:

```env
NEXT_PUBLIC_HTTP_SERVER=https://<your-render-url>.onrender.com
```

---

## Deployment

This app is deployed on **Vercel**.

1. Push your branch to GitHub
2. Import the repo into [vercel.com](https://vercel.com)
3. Set the `NEXT_PUBLIC_HTTP_SERVER` environment variable to your live Render backend URL
4. Deploy

> **Note:** After updating environment variables in Vercel, always redeploy for changes to take effect.

---

## Author

**Kiran Ulhas Kulkarni**  
MS Computer Science — Northeastern University, Khoury College  
[GitHub](https://github.com/kiran-ulhas-kulkarni) · [LinkedIn](https://linkedin.com/in/kiran-ulhas-kulkarni)
