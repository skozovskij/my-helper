import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/AuthForm.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
    alert('Реєстрація успішна! Тепер, будь ласка, увійдіть.');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Реєстрація</h2>

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

        <button type="submit" className="auth-button">Зареєструватися</button>

        <p className="auth-toggle-link">
          Вже маєте акаунт? <Link to="/login">Увійти</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
