import { useEffect, useState } from 'react';
import { DeviceType } from '../utils/app-constants';

const useDeviceType = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  if (width <= 768) {
    return DeviceType.Mobile;
  }

  if (width > 768 && width <= 950) {
    return DeviceType.Tablet;
  }

  if (width > 950 && width <= 1400) {
    return DeviceType.Desktop;
  }

  return DeviceType.LargeDesktop;
};

export default useDeviceType;
