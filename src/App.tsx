import React from 'react';
import './App.scss';
import Home from './components/home';
import useDeviceType from './hooks/use-device-type';
const App = () => {
  const deviceType = useDeviceType();

  return (
    <div className={`App device-type-${deviceType}`}>
      <Home />
    </div>
  );
};

export default App;
