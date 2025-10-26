import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import { MathJaxContext } from 'better-react-mathjax';

const config = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],  
      ["\\[", "\\]"]
    ]
  },
  svg: {
    fontCache: "global"
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/my-helper">
    <MathJaxContext config={config}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MathJaxContext>
  </BrowserRouter>
);