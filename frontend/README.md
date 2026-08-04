# Vite Project Structure & Coding Standards

A comprehensive guide to organizing your Vite application for scalability, maintainability, and clarity.

---

## Table of Contents

- [Folder Structure Overview](#folder-structure-overview)
- [Naming Conventions](#naming-conventions)
- [Detailed Directory Guide](#detailed-directory-guide)
- [Example Tree](#example-tree)
- [Common Patterns](#common-patterns)
- [Best Practices](#best-practices)

---

## Folder Structure Overview

```
src/
├── assets/           # Static files (images, SVGs, fonts, icons)
├── components/       # Reusable UI components
├── features/         # Feature-specific domains and logic
├── pages/            # Route-level components
├── hooks/            # Custom React hooks
├── utils/            # Pure utility functions
├── lib/              # External integrations and setup
├── styles/           # Global styles and design tokens
├── router/           # Route configuration and setup
├── App.tsx           # Top-level app component
└── main.tsx          # Application entry point
```

---

## Naming Conventions

### File Names

- **React Components**: `PascalCase` (e.g., `Button.tsx`, `ProfileCard.tsx`)
- **Hooks**: `camelCase`, prefixed with `use` (e.g., `useFetch.ts`, `useAuth.ts`)
- **Utils & Functions**: `camelCase` (e.g., `formatDate.ts`, `parseJSON.ts`)
- **Styles**: `camelCase` or `kebab-case` (e.g., `globals.css`, `theme-variables.css`)
- **Config Files**: `lowercase` or `kebab-case` (e.g., `router.config.ts`)

### Folder Names

- **Always lowercase**, `kebab-case` for multi-word folders
- Examples: `ui-components`, `auth-feature`, `api-clients` ✓
- Avoid: `UIComponents`, `AuthFeature`, `APIClients` ✗

### TypeScript/React Files

- Use `.tsx` for files exporting React components
- Use `.ts` for utility files, hooks, and configs

---

## Detailed Directory Guide

### 📁 `assets/`

Static files that need to be imported into components. **Not publicly served** — import explicitly.

**Contains:**

- Images (`.png`, `.jpg`, `.webp`)
- SVGs as components or files (`.svg`)
- Font files (`.woff2`, `.ttf`)
- Icons and illustrations

**Example Usage:**

```typescript
import logo from "@/assets/images/logo.png";
import { ArrowIcon } from "@/assets/icons/ArrowIcon";
```

---

### 📁 `components/`

Reusable, self-contained UI pieces. These are **domain-agnostic** — they don't know about specific features.

**Guidelines:**

- ✓ Keep components pure and focused on presentation
- ✓ Accept data and callbacks via props
- ✓ Use composition over inheritance
- ✗ Don't fetch data directly in these components
- ✗ Don't include business logic specific to a feature

**Examples:**

- `Button.tsx` — Generic button with variants
- `Modal.tsx` — Reusable modal wrapper
- `Card.tsx` — Simple card layout
- `Badge.tsx` — Status badge component

**Structure:**

```
components/
├── Button/
│   ├── Button.tsx
│   └── Button.module.css
├── Modal/
│   ├── Modal.tsx
│   └── Modal.module.css
└── Card/
    ├── Card.tsx
    └── Card.module.css
```

---

### 📁 `features/`

Domain-specific features with encapsulated logic. Each subfolder is a **complete feature** — deleting it should remove that entire capability.

**Guidelines:**

- Organize by business domain (e.g., `auth`, `dashboard`, `profile`)
- Include feature-specific components, hooks, API calls, and types
- Can have its own sub-structure mirroring the root `src/`

**Example Feature Structure:**

```
features/auth/
├── components/
│   ├── LoginForm.tsx
│   └── RegisterForm.tsx
├── hooks/
│   ├── useLogin.ts
│   └── useAuth.ts
├── services/
│   └── authAPI.ts
├── types/
│   └── auth.types.ts
└── index.ts  # Barrel export
```

**Barrel Export Pattern** (`features/auth/index.ts`):

```typescript
export * from "./components";
export * from "./hooks";
export * from "./types";
```

---

### 📁 `pages/`

Route-level components that map to application routes. **Composition-heavy** — they assemble features and components.

**Guidelines:**

- One component per route (usually)
- Think of these as "screens"
- Minimal logic — mostly composition
- Named to match routes (e.g., `Dashboard.tsx` for `/dashboard`)

**Example:**

```typescript
// pages/Dashboard.tsx
export function Dashboard() {
  return (
    <div>
      <Header />
      <DashboardFeature />
      <Footer />
    </div>
  );
}
```

---

### 📁 `hooks/`

Custom React hooks. **Reusable, testable, and pure.**

**Guidelines:**

- Always start with `use` prefix
- Extract complex component logic into hooks
- Keep hooks focused on a single responsibility
- Test hooks with `@testing-library/react`

**Examples:**

```
hooks/
├── useFetch.ts
├── useAuth.ts
├── useDebounce.ts
├── useLocalStorage.ts
└── useClickOutside.ts
```

**Example Hook:**

```typescript
// hooks/useFetch.ts
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

---

### 📁 `utils/`

Pure, side-effect-free utility functions. **"Jazz" functions** that do one thing really well.

**Guidelines:**

- Pure functions only (same input → same output)
- No external dependencies or API calls
- Well-tested and well-documented
- Highly reusable across the app

**Examples:**

```
utils/
├── formatDate.ts
├── parseJSON.ts
├── deepClone.ts
├── generateId.ts
├── arrayUtils.ts
└── stringUtils.ts
```

**Example Utility:**

```typescript
// utils/formatDate.ts
export function formatDate(date: Date, format: string = "MM/DD/YYYY"): string {
  // Implementation
}
```

---

### 📁 `lib/`

Integrations and external service setup. **The "outside world" zone.**

**Contains:**

- API client setup (Axios, Fetch wrapper)
- Firebase/Backend initialization
- Analytics setup
- Third-party service configuration
- Authentication setup

**Guidelines:**

- Centralize all external integrations here
- Export configured instances
- Keep side effects here (if they must exist)

**Example:**

```
lib/
├── api/
│   ├── axios.ts
│   └── endpoints.ts
├── firebase/
│   └── config.ts
├── analytics/
│   └── setup.ts
└── logger.ts
```

**Example API Setup** (`lib/api/axios.ts`):

```typescript
import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

---

### 📁 `styles/`

Global styles, design tokens, and theming. **Single source of truth for design.**

**Contains:**

- Global CSS resets and base styles
- Tailwind configuration extensions
- CSS variables and design tokens
- Color palettes, typography scales
- Animations and transitions

**Guidelines:**

- Don't scatter color definitions across files
- Define all design tokens here
- Use CSS variables for dynamic theming

**Example Structure:**

```
styles/
├── globals.css
├── variables.css
├── tailwind.config.ts
├── animations.css
└── reset.css
```

**Example Design Tokens** (`styles/variables.css`):

```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --color-background: #ffffff;
  --color-text: #1f2937;

  /* Typography */
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
}
```

---

### 📁 `router/`

Route definitions and lazy-loading setup. **App navigation orchestration.**

**Example** (React Router v6):

```
router/
├── index.tsx
└── routes.ts
```

**Example Router Setup** (`router/index.tsx`):

```typescript
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/components';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Profile = lazy(() => import('@/pages/Profile'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/profile',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
```

---

### 📄 `App.tsx`

Top-level application component. **The main component wrapper.**

**Includes:**

- Router/Navigation setup
- Global providers (Redux, Theme, etc.)
- Layout structure
- Error boundaries

**Keep it clean and simple.** Don't add heavy logic here.

```typescript
// App.tsx
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/lib/theme';
import { router } from '@/router';

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
```

---

### 📄 `main.tsx`

Application bootstrap. **The front door.**

**Responsibilities:**

- Mount React to DOM
- Import global styles
- Setup external services (if needed)

```typescript
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/App';
import '@/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

## Example Tree

```
src/
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   └── hero.jpg
│   ├── icons/
│   │   └── ArrowIcon.tsx
│   └── fonts/
│       └── inter.woff2
│
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── index.ts
│   ├── Modal/
│   ├── Card/
│   └── index.ts
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/
│   │   │   ├── useLogin.ts
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── authAPI.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts
│   │
│   └── dashboard/
│       ├── components/
│       │   └── DashboardWidget.tsx
│       ├── hooks/
│       │   └── useDashboardData.ts
│       └── index.ts
│
├── pages/
│   ├── Dashboard.tsx
│   ├── Profile.tsx
│   ├── Login.tsx
│   └── NotFound.tsx
│
├── hooks/
│   ├── useFetch.ts
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
│
├── utils/
│   ├── formatDate.ts
│   ├── parseJSON.ts
│   └── generateId.ts
│
├── lib/
│   ├── api/
│   │   ├── axios.ts
│   │   └── endpoints.ts
│   ├── firebase/
│   │   └── config.ts
│   └── logger.ts
│
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── animations.css
│
├── router/
│   └── index.tsx
│
├── App.tsx
└── main.tsx
```

---

## Common Patterns

### Barrel Exports

Create `index.ts` files in component folders for cleaner imports.

**Before:**

```typescript
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
```

**After:**

```typescript
import { Button, Modal } from "@/components";
```

**Example** (`components/index.ts`):

```typescript
export { Button } from "./Button/Button";
export { Modal } from "./Modal/Modal";
export { Card } from "./Card/Card";
```

---

### Import Aliases

Configure in `vite.config.ts` and `tsconfig.json`:

**vite.config.ts:**

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

**tsconfig.json:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

### Feature Domain Isolation

If a feature gets deleted, nothing else should break.

```typescript
// ✓ Good: All auth logic is isolated
import { useAuth } from "@/features/auth";
import { LoginForm } from "@/features/auth";

// ✗ Avoid: Tight coupling to feature internals
import { useAuth } from "@/features/auth/hooks/useAuth";
import { LoginForm } from "@/features/auth/components/LoginForm";
```

---

## Best Practices

### ✓ Do's

- **Colocate related code** — Keep a component with its styles and tests
- **Keep components small** — Single responsibility principle
- **Use TypeScript** — Define types for props, state, and API responses
- **Test utilities and hooks** — They're the hardest to debug later
- **Document complex logic** — Especially in `lib/` and `utils/`
- **Use lazy loading** — Especially for large page components
- **Consistent naming** — Makes code predictable and searchable
- **Reuse through composition** — Build features from small, tested components

### ✗ Don'ts

- **Don't put business logic in components** — Extract to hooks or utilities
- **Don't fetch data in `components/`** — Move to `features/` or hooks
- **Don't create "god" components** — Break them up
- **Don't scatter styles** — Centralize in `styles/` and component-specific files
- **Don't ignore TypeScript** — It catches bugs early
- **Don't create a "misc" folder** — Everything should have a home
- **Don't over-engineer early** — Add structure as complexity grows

---

## Testing Strategy

Create a `__tests__` folder adjacent to the code being tested:

```
components/
├── Button/
│   ├── Button.tsx
│   ├── Button.module.css
│   ├── __tests__/
│   │   └── Button.test.tsx
│   └── index.ts
```

Or use a top-level `tests/` folder for integration tests.

---

## Environment Variables

Create `.env` and `.env.local` files in the **root** (not `src/`):

```
VITE_API_URL=https://api.example.com
VITE_ENV=development
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Summary

This structure scales from small projects to enterprise apps. Start simple, and add complexity only as needed. The key principle: **organize by feature domain, not by type.**
