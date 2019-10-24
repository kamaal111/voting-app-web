import React from 'react';

import AppNavigator from './AppNavigator';
import { SessionProvider } from './Contexts/sessionContext';

import './styles/css/App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <SessionProvider>
      <AppNavigator />
    </SessionProvider>
  );
};

export default App;
