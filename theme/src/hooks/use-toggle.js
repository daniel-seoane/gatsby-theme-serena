import { useState, useCallback } from "react";

const useToggle = defaultIsOpen => {
  const [isOpen, setIsOpen] = useState(Boolean(defaultIsOpen));
  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onToggle = useCallback(() => setIsOpen(prevIsOpen => !prevIsOpen), []);
  return { isOpen, onOpen, onClose, onToggle };
};

export default useToggle;
