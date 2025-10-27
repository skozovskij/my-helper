import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/SubscriptionPage.css';


function SubscriptionPage() {
  const { subscription, upgradeSubscription, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleUpgrade = (plan) => {
    if (!isAuthenticated) {
      console.warn('Будь ласка, увійдіть, щоб оновити підписку.');
      navigate('/login');
    } else {
      console.log(`Оновлення до ${plan}`);
      upgradeSubscription(plan);
    }
  };

  return (
    <>
      <div className="subscription-page">
    <div className="page-container">
        
        <div className="header-section">
            <h2>Наші тарифи для успішного навчання</h2>
            {user && (
                <p className="user-greeting">
                    Вітаємо, {user.email}!
                </p>
            )}
            <p className="current-plan-text">
                Ваш поточний тариф: 
                <strong className="current-plan-badge">{subscription}</strong>
            </p>
        </div>

        <div className="pricing-grid">

            <div className="plan-card">
                <div className="plan-header">
                    <h3>"Free"</h3>
                    <p className="plan-price">
                        <span className="price-value">Безкоштовно</span>
                    </p>
                    <p>Базовий доступ для ознайомлення з нашою платформою.</p>
                </div>
                
                <ul className="features-list">
                    <li>
                        <span className="icon-check">✅</span>
                        <span>Каталог усіх тем</span>
                    </li>
                    <li className="feature-disabled">
                        <span className="icon-cross">❌</span>
                        <span>Доступ до тестів</span>
                    </li>
                    <li className="feature-disabled">
                        <span className="icon-cross">❌</span>
                        <span>AI-асистент</span>
                    </li>
                </ul>
                
                <div className="plan-footer">
                    <button 
                        className="btn-sub btn-default"
                        disabled
                    >
                        {subscription === 'free' ? 'Ваш поточний тариф' : 'Спробувати безкоштовно'}
                    </button>
                </div>
            </div>

            <div className="plan-card">
                <div className="plan-header">
                    <h3>"Standard"</h3>
                    <p className="plan-price">
                        <span className="price-value">$10</span> / міс.
                    </p>
                    <p>Повний контент з обох предметів та базовий AI-помічник.</p>
                </div>
                
                <ul className="features-list">
                    <li>
                        <span className="icon-check">✅</span>
                        <span>Доступ до тестів</span>
                    </li>
                    <li>
                        <span className="icon-check check-limited">✅</span> 
                        <span>AI-асистент (до 30 запитів/день)</span>
                    </li>
                    <li className="feature-disabled">
                        <span className="icon-cross">❌</span>
                        <span>Потужна AI-модель</span>
                    </li>
                </ul>
                
                <div className="plan-footer">
                  <p className="small-text">Економія 20% при оплаті за рік</p>
                    <button 
                        className="btn-sub btn-pro"
                        onClick={() => handleUpgrade('pro')}
                        disabled={subscription === 'standard' || subscription === 'premium'}
                    >
                        {subscription === 'standard' ? 'Ваш тариф' : (subscription === 'premium' ? 'Включено' : 'Обрати Standard')}
                    </button>
                    
                </div>
            </div>

            <div className="plan-card plan-card--premium">
                <span className="badge">
                    НАЙКРАЩИЙ ВИБІР
                </span>
                
                <div className="plan-header plan-header--premium">
                    <h3>"Premium"</h3>
                    <p className="plan-price">
                         <span className="price-value">$20</span> / міс.
                    </p>
                    <p>Необмежений кількість запитів до AI та персоналізація для найкращих результатів.</p>
                </div>
                
                <ul className="features-list">
                    <li>
                        <span className="icon-check">✅</span>
                        <span>Необмежена кількість запитів до AI-асистента</span>
                    </li>
                    <li>
                        <span className="icon-check">✅</span>
                        <span>Потужна AI-модель</span>
                    </li>
                    <li>
                        <span className="icon-check">✅</span>
                        <span>Більше тестів та аналітика прогресу</span>
                    </li>
                </ul>
                
                <div className="plan-footer">
                    <button 
                        className="btn-sub btn-premium"
                        onClick={() => handleUpgrade('premium')}
                        disabled={subscription === 'premium'}
                    >
                        {subscription === 'premium' ? 'Ваш тариф' : 'Підключити Premium'}
                    </button>
                </div>
            </div>

        </div>
    </div>
</div>
    </>
  );
}

export default SubscriptionPage;

