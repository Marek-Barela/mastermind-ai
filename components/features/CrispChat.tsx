"use client";

import { useLayoutEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useLayoutEffect(() => {
    Crisp.configure("d537fbf0-3735-4354-af2a-e6db203deb4d");
  }, []);

  return null;
};

export default CrispChat;
