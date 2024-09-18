


<div>
  <a href="https://www.wednesday.is?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" align="left" style="margin-left: 0;">
    <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f5879492fafecdb3e5b0e75_wednesday_logo.svg">
  </a>
  <p>
    <h1 align="left">Next.js TypeScript Template
    </h1>
  </p>

  <p>
An enterprise Next.js boilerplate loaded with features to build high-performance, maintainable applications. The template includes advanced configuration, strict TypeScript, GitHub Actions workflows, testing strategies, observability tools, and much more.
  </p>

---

  <p>
    <h4>
      Expert teams of digital product strategists, developers, and designers at Wednesday Solutions.
    </h4>
  </p>

  <div>
    <a href="https://www.wednesday.is/contact-us?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88b9005f9ed382fb2a5_button_get_in_touch.svg" width="121" height="34">
    </a>
    <a href="https://github.com/wednesday-solutions/" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88bb1958c3253756c39_button_follow_on_github.svg" width="168" height="34">
    </a>
  </div>

---

<span>We’re always looking for talented people. <a href="https://www.wednesday.is/hiring">We are hiring!</a></span>

</div>

## Architecture

The goal of this template is to provide separation of concerns while enabling the fastest development experience possible. Key features include:

- **Next.js with optimized performance** and App Directory setup.
- **Atomic Design principles** using Tailwind CSS for rapid UI development and component reuse.
- **Extremely strict TypeScript** setup to enforce type safety using the `ts-reset` library.
- **Global State Management** using your preferred state management solution: Recoil, Zustand, or Jotai.

### Atomic Design

Atomic Design breaks components into reusable modules—atoms, molecules, and organisms—allowing for scalable, consistent UI development. These components are then combined to create complex UIs.

- **Atoms**: The smallest, reusable components like buttons, text, or icons.
- **Molecules**: Combinations of atoms that create slightly more complex structures.
- **Organisms**: Groupings of molecules and atoms that perform a specific function.

For state management, **Recoil** is recommended but you can also use **Zustand** or **Jotai** based on your project needs.

## Features

- **Next.js**: Pre-configured with Next.js best practices.
- **TypeScript**: Strict, type-safe setup with [ts-reset](https://github.com/total-typescript/ts-reset).
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **ESLint & Prettier**: For linting and formatting.
- **Jest & React Testing Library**: Pre-configured for unit and integration tests.
- **Playwright**: End-to-end testing setup.
- **GitHub Actions**: Workflows for continuous integration, including Bundle Size, Performance Stats, and Code Reviews powered by **ChatGPT**.
- **OpenTelemetry**: Observability with seamless integration.
- **Semantic Release**: Automated changelog and versioning.
- **Component coupling & cohesion graph**: Visualize relationships between your components.
- **Feature Flagging & Error Tracking**: Managed using **GrowthBook** and **Sentry** respectively.

## Getting Started

To start using this boilerplate:

1. Clone the repository:

```bash
git clone https://github.com/wednesday-solutions/next-ts-template.git
```

2. Install the dependencies:

```bash
yarn install --frozen-lockfile
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view your app.

## Testing

- **Unit & Integration Tests**: Run tests with:

```bash
yarn test
```

- **End-to-end Tests**: Run Playwright tests:

```bash
yarn e2e:headless
```

## Styling & Design System

This template uses **Tailwind CSS** and **CVA** (Class Variants Authority) to implement an atomic, reusable design system. CVA simplifies variant creation and UI development.

## State Management

We recommend using **Recoil**, **Zustand**, or **Jotai** for state management based on your project size and needs. Choose the one that best suits your development requirements.

## License

This project is licensed under the MIT License. For more information, check the [LICENSE](./LICENSE) file.
