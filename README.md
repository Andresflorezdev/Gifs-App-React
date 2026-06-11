# 🎬 Gifs App React

A modern GIF search application built with React, TypeScript, and Vite. This app allows users to search for GIFs using the Giphy API, view previous searches, and discover trending GIFs.

## ✨ Features

- **🔍 GIF Search**: Search for GIFs using the Giphy API
- **📝 Previous Searches**: View and quickly access your previous search terms
- **📱 Responsive Design**: Clean and modern UI built with React components
- **📘 TypeScript**: Fully typed codebase for better development experience
- **🧪 Testing**: Comprehensive test suite with Vitest and React Testing Library

## 🛠️ Technologies Used

- **⚛️ React 19**: Latest version of React for building user interfaces
- **📘 TypeScript**: Type-safe JavaScript
- **⚡ Vite**: Fast build tool and development server
- **🌐 Axios**: HTTP client for API requests
- **🎨 Giphy API**: GIF search and discovery API
- **🧪 Vitest**: Testing framework
- **🔬 React Testing Library**: Component testing utilities

## 🚀 Getting Started

### 📋 Prerequisites

- 💻 Node.js (version 18 or higher)
- 📦 npm or yarn package manager
- 🔑 Giphy API Key (see below)

### 📦 Installation

1. 📥 Clone the repository:
```bash
git clone <repository-url>
cd Gifs-App-React
```

2. 📚 Install dependencies:
```bash
npm install
```

3. 🔐 Create a `.env` file in the root directory and add your Giphy API key:
```env
VITE_GIPHY_API_KEY=your_api_key_here
```

### 🔑 Getting a Giphy API Key

1. 🌐 Go to the [Giphy Developer Dashboard](https://developers.giphy.com/dashboard/)
2. 👤 Create an account or sign in
3. ➕ Create a new app to get your API key
4. 📋 Copy the API key and add it to your `.env` file

### 🏃 Running the Application

▶️ Start the development server:
```bash
npm run dev
```

🌐 Open your browser and navigate to `http://localhost:5173`

## ⚡ Available Scripts

- `npm run dev` - ▶️ Start the development server
- `npm run build` - 🏗️ Build the application for production (includes tests)
- `npm run lint` - 🔍 Run ESLint to check for code issues
- `npm run preview` - 👁️ Preview the production build locally
- `npm test` - 🧪 Run tests in watch mode
- `npm run test:ui` - 🖥️ Run tests with Vitest UI
- `npm run test:only` - ⚡ Run tests once
- `npm run coverage` - 📊 Generate test coverage report

## 📁 Project Structure

```
src/
├── gifs/
│   ├── actions/         # GIF-related actions
│   ├── api/            # Giphy API configuration
│   ├── components/     # GIF-specific components (GifsList, PreviousSearches)
│   ├── hooks/          # Custom hooks (useGifs)
│   └── interfaces/     # TypeScript interfaces
├── shared/
│   └── components/     # Shared components (CustomHeader, SearchBar)
├── GifsApp.tsx         # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🧩 Components

- **🎬 GifsApp**: Main application component that orchestrates the GIF search functionality
- **🖼️ GifsList**: Displays a grid of GIFs based on search results
- **📜 PreviousSearches**: Shows and allows quick access to previous search terms
- **🎯 CustomHeader**: Application header with title and description
- **🔍 SearchBar**: Input component for searching GIFs

## 🧪 Testing

The project includes comprehensive tests using Vitest and React Testing Library. Tests are located in the `test/` directory and alongside components using the `.test.tsx` or `.test.ts` extension.

To run tests:
```bash
npm test
```

To generate coverage report:
```bash
npm run coverage
```

## 🏗️ Building for Production

🏗️ To build the application for production:
```bash
npm run build
```

📦 The built files will be in the `dist/` directory.

## 📜 License

This project is private and proprietary.
