import React, { ReactNode } from 'react';
import { AuthProvider } from './auth';

interface AppProviderprops {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderprops) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
} 

export { AppProvider };
