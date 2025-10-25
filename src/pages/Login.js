import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/AuthForm.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/profile'); 
  };

  return (
    <div className="auth-container"> 
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Вхід</h2>
        
        <div className="form-group">
          <label className="auth-label">Email:</label>
          <input 
            type="email" 
            className="auth-input"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label className="auth-label">Пароль:</label>
          <input 
            type="password" 
            className="auth-input"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" className="auth-button">Увійти</button>
        
        <p className="auth-toggle-link">
          Немає акаунту? <Link to="/register">Зареєструватися</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
