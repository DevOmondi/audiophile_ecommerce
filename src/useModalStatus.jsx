// import React from 'react'
import { useState } from "react";

export function useModalStatus() {
  const [isOpen, setIsopen] = useState(true);
  
  return [isOpen, setIsopen];
}
