
import React from 'react';

interface ZerovortexLogoProps {
  className?: string;
}

const ZerovortexLogo: React.FC<ZerovortexLogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="20" fill="#7E69AB" />
      <path
        d="M10 10L30 10L10 30Z"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M30 30L10 30L30 10Z"
        fill="#0EA5E9"
        stroke="#0EA5E9"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ZerovortexLogo;
