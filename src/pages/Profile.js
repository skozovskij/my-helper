import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/ProfilePage.css';

function Profile() {
  const { user, subscription, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <p>Ви не увійшли в систему.</p>;
  }
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Профіль користувача</h2>
        
        <div className="profile-info">
          <strong>Email:</strong>
          <span className="profile-email">{user.email}</span>
        </div>
        
        <div className="profile-info">
          <strong>Ваш тариф:</strong>
          <span className="profile-subscription">{subscription}</span>
        </div>
        
        {subscription === 'free' && (
          <Link to="/subscriptions" className="profile-upgrade-link">
            Оновити підписку
          </Link>
        )}
        
        <button onClick={handleLogout} className="profile-logout-btn">
          Вийти з акаунту
        </button>
      </div>
    </div>
  );
}

export default Profile;
