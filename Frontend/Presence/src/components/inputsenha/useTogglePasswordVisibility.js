import React, { useState } from 'react';

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye-outline');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye-outline') {
        setRightIcon('ios-eye-off-outline');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'ios-eye-off-outline') {
        setRightIcon('eye-outline');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };