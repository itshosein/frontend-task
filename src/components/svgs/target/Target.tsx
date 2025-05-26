import React from "react";

interface TargetSVGProps {
  width: number;
  height: number;
  color: string;
}

const TargetSVG: React.FC<TargetSVGProps> = (props) => {
  const { color, height, width } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="25"
        fill="#78FF97"
        fillOpacity="0.1"
      />
      <path
        d="M27.0408 22.9592L24.5298 25.4702"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0009 18.9975V22.9992H31.0025L35.0042 18.9975L32.3361 17.6639L31.0025 14.9958L27.0009 18.9975Z"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9996 16.9716C19.4361 17.2517 15.9064 21.0825 16 25.6537C16.0936 30.2248 19.7771 33.9079 24.3482 34.001C28.9194 34.0941 32.7498 30.5639 33.0294 26.0004"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.2117 26.0004C28.9427 28.4635 26.8174 30.3009 24.3413 30.2111C21.8652 30.1213 19.8786 28.1347 19.7888 25.6586C19.699 23.1825 21.5364 21.0572 23.9995 20.7882"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TargetSVG;
