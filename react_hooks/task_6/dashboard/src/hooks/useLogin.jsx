// src/hooks/useLogin.jsx
import { useState, useEffect } from 'react';

export default function useLogin(onLogin) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const validateForm = (email, password) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length >= 8;
    return isValidEmail && isValidPassword;
  };

  useEffect(() => {
    setEnableSubmit(validateForm(email, password));
  }, [email, password]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enableSubmit) onLogin(email, password);
  };

  return {
    email,
    password,
    enableSubmit,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
