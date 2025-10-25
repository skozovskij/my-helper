import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function SubscriptionPage() {
  const { subscription, upgradeSubscription, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleUpgrade = (plan) => {
    if (!isAuthenticated) {
      alert('Будь ласка, увійдіть, щоб оновити підписку.');
      navigate('/login');
    } else {
      upgradeSubscription(plan);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Наші тарифи</h2>
          {user && <p className="lead mb-4">Вітаємо, {user.email}!</p>}
          <p className="lead mb-4">
            Ваш поточний тариф: <strong className="text-primary text-uppercase">{subscription}</strong>
          </p>
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-center">Тариф "Pro"</h3>
              <p className="card-text text-center text-muted">Повний доступ до всіх формул та матеріалів з Математики та Хімії.</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">✅ Всі теми з Математики</li>
                <li className="list-group-item">✅ Всі теми з Хімії</li>
                <li className="list-group-item text-muted">❌ Без ШІ-помічника</li>
              </ul>
              <div className="mt-auto text-center pt-3">
                <button 
                  className="btn btn-primary btn-lg w-100"
                  onClick={() => handleUpgrade('pro')} 

                  disabled={subscription === 'pro' || subscription === 'premium'}
                >
                  {subscription === 'pro' ? 'Ваш тариф' : (subscription === 'premium' ? 'Включено у Premium' : 'Отримати Pro')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Картка "Premium" */}
        <div className="col-md-5 mb-4">
          <div className="card h-100 shadow-sm border-success">
            <div className="card-header bg-success text-white text-center">
              Найкращий вибір
            </div>
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-center">Тариф "Premium"</h3>
              <p className="card-text text-center text-muted">Все з "Pro", а також доступ до персонального ШІ-помічника (ChatBot).</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">✅ Всі теми з Математики</li>
                <li className="list-group-item">✅ Всі теми з Хімії</li>
                <li className="list-group-item">✅ Доступ до ШІ-помічника</li>
              </ul>
              <div className="mt-auto text-center pt-3">
                <button 
                  className="btn btn-success btn-lg w-100"
                  onClick={() => handleUpgrade('premium')}
                  disabled={subscription === 'premium'}
                >
                  {subscription === 'premium' ? 'Ваш тариф' : 'Отримати Premium'}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SubscriptionPage;
