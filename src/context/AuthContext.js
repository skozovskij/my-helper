import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 
  const [subscription, setSubscription] = useState('free'); 

  const login = (email, password) => {
    console.log('Logging in with:', email, password);
    setIsAuthenticated(true);
    setUser({ email: email }); 
    setSubscription('free'); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setSubscription('free'); 
  };

  const register = (email, password) => {
    // Тут буде запит на сервер для створення юзера
    console.log('Registering with:', email, password);
  };

  const upgradeSubscription = (plan) => {
    if (!isAuthenticated) {
      alert("Спочатку увійдіть в акаунт");
      return;
    }
    console.log(`User ${user.email} upgrading to ${plan}`);
    setSubscription(plan);
    alert(`Вітаємо! Ви оновилися до тарифу "${plan}"`);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        user, 
        subscription,
        login, 
        logout, 
        register, 
        upgradeSubscription 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};