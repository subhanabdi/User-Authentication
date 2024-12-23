import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

function initializeApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Failed to find the root element');
  }

  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}

// Initialize the app with error handling
try {
  initializeApp();
} catch (error) {
  console.error('Failed to initialize app:', error);
  // Render a fallback error message if initialization fails
  document.body.innerHTML = `
    <div style="
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      text-align: center;
      font-family: system-ui, -apple-system, sans-serif;
    ">
      <div>
        <h1 style="color: #374151; font-size: 24px; font-weight: bold; margin-bottom: 16px;">
          Unable to load application
        </h1>
        <p style="color: #6B7280;">
          Please try refreshing the page. If the problem persists, contact support.
        </p>
      </div>
    </div>
  `;
}