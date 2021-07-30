import { useState } from 'react';

const useToggler = (defaultBool = false) => {
  const [isComponentToggled, setisComponentToggled] = useState(defaultBool);

  const toggleComponent = () => {
    setisComponentToggled(!isComponentToggled);
  };

  return [isComponentToggled, toggleComponent];
};
export default useToggler;
