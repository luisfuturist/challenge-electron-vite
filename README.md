## Challenge: Running Vite in Dev-Mode with Electron

This project explores the idea of using Vite, a lightning-fast build tool, in development mode while building a desktop application with Electron. It demonstrates fetching system information using the Node.js "os" module and displaying it in a React frontend.

## Features

- ♻️ **Memory monitoring**: Track total, used, and free memory.
- 🧮 **Processor monitoring**: Monitor CPU core count, usage, and free resources.
- ⚙️ **Operational system info**: Explore information like OS name, type, release version, and user details.

## Installation

```bash
git clone https://github.com/luisfuturist/challenge-electron-vite
cd challenge-electron-vite
npm install
```

## Usage

The project utilizes various npm scripts to streamline development and build processes.

| Script                              | Description                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------|
| `start` (**`npm run start`**)       | Starts the Electron application.                                                    |
| `pkg` (**`npm run pkg`**)           | Packages the application for desktop deployment.                                    |
| `build` (**`npm run build`**)       | Compiles the main Electron process code (`src/main`) into the `dist/web` directory. |
| `dev` (**`npm run dev`**)           | Watches the `src/main` directory for changes and recompiles the code on update.     |
| `dev:mock` (**`npm run dev:mock`**) | Launches a development server for a mocked version of the application.              |

**Note:** The project includes a mocked version (accessible with `npm run dev:mock`). This is useful for showcase, as it allows you to see how the application functions without relying on real system data.

## Technologies

This project leverages a combination of modern frontend and desktop development tools:

- **JavaScript & JSX**: Core programming language and syntax extension for building interactive UI elements.
- **Vite**: Next-generation build tool known for its blazing-fast development server and build performance.
- **Electron**: Framework for building cross-platform desktop applications using web technologies.
- **Electron Builder**: Tool for packaging and building desktop applications using Electron.
- **React**: Popular library for building user interfaces with reusable components.
- **React Router DOM**: Enables single-page application (SPA) routing for seamless navigation between different views.
- **Bootstrap & React Bootstrap**: CSS framework and UI component library for building visually appealing and responsive interfaces.
- **Babel**: JavaScript compiler for ensuring compatibility across different browser environments.
