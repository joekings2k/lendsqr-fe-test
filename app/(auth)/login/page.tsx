import React from 'react';
import styles from '@/styles/login.module.scss';
import ImageScreen from './_components/ImageScreen';

import LoginFormPage from './_components/LoginForm';
function LoginScreen() {
  return (
    <div className={styles.login}>
      <div className={styles.imgScreen}>
        <ImageScreen />
      </div>
      <div className={styles.formscreen}>
        <LoginFormPage />
      </div>
    </div>
  );
}

export default LoginScreen