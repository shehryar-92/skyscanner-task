# Skyscanner Date Picker

A responsive and lightweight reservation date picker application built with React, styled using Backpack components, and optimized for smooth travel booking experiences.

## 🚀 Features

- **Dynamic Range Selection:** Easily select departure and return dates.
- **Backpack Design System:** Implements clean, accessible, and polished travel UI components.
- **Responsive Layout:** Completely optimized for both mobile screens and desktop viewports.

## 🛠️ Tech Stack

- **Framework:** React
- **Build Tool:** [Create React App](https://github.com/facebook/create-react-app) + [backpack-react-scripts](https://github.com/Skyscanner/backpack-react-scripts)
- **Styling:** Sass & CSS Modules

## 📦 Getting Started

Follow these steps to run the project locally on your machine.

### 1. Clone the repository
```bash
git clone https://github.com
cd YOUR_REPO_NAME
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 🤖 Available Scripts

Inside the project directory, you can run:

- `npm start` - Runs the app in development mode with hot-reloading.
- `npm test` - Launches the interactive test watcher.
- `npm run build` - Bundles and optimizes the app into the `build` folder for production deployment.

---

<details>
<summary>⚙️ Advanced Build & Tooling Configurations (Click to expand)</summary>

### Excluding React from Output Bundle
To exclude React modules from the final bundle size for performance reasons, verify your `package.json` contains:
```json
{
  "backpack-react-scripts": {
    "externals": {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  }
}
```

### Server Side Rendering (SSR)
If you require SEO-friendly indexing, create an `ssr.js` file in your root folder:
```js
import App from './App';
export default { App };
```
Running `npm run build` will output an isolated server-renderable script dynamically.

### CSS Modules Configuration
All Sass files are treated as CSS Modules natively. To change this behavior globally, update your configuration options:
```json
"backpack-react-scripts": {
  "cssModules": false
}
```
*Note: If disabled, you can still opt-in on a per-file basis using the `*.module.scss` naming convention.*
</details>
