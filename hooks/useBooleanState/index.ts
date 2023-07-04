import { useState } from 'react';

export const useBooleanState = () => {
  const [bool, setBool] = useState(false);

  const onToggle = () => {
    setBool(!bool);
  };

  const onOpen = () => {
    setBool(true);
  };

  const onClose = () => {
    setBool(false);
  };

  return [bool, onOpen, onClose, onToggle] as const;
};
