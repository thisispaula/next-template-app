## UI5 Web Components React - Next.js App Router Template

This template shows how to use the [Next.js](https://nextjs.org/) App Router with UI5 Web Components for React.

## How to use this template

```bash
npx degit SAP/ui5-webcomponents-react/templates/nextjs-app#main my-project
cd my-project
```

## Getting Started

First, install the node_modules:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Reproduction Steps
- npm run dev
- Once the page is loaded hit refresh multiple times or
- Once the page is loaded navigate to another page

--> Error appears in the terminal of vs code (not browser console)
--> Issue is not happening stable (80% fine 20% throwing error)

## Issue in Terminal

```bash
TypeError: Cannot read properties of undefined (reading 'description')
    at eval (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:75:52)
    at Array.forEach (<anonymous>)
    at displayFailedRegistrations (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:52:26)
    at Timeout.eval [as _onTimeout] (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:38:13)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
 ⨯ uncaughtException: TypeError: Cannot read properties of undefined (reading 'description')
    at eval (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:75:52)
    at Array.forEach (<anonymous>)
    at displayFailedRegistrations (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:52:26)
    at Timeout.eval [as _onTimeout] (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:38:13)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
 ⨯ uncaughtException: TypeError: Cannot read properties of undefined (reading 'description')
    at eval (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:75:52)
    at Array.forEach (<anonymous>)
    at displayFailedRegistrations (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:52:26)
    at Timeout.eval [as _onTimeout] (webpack-internal:///(ssr)/./node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js:38:13)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
```