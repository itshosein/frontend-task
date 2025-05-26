import React from "react";

interface RocketSVGProps {
  width: number;
  height: number;
  color: string;
}

const RocketSVG: React.FC<RocketSVGProps> = (props) => {
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
        fill={`var(--${color})`}
        fillOpacity="0.1"
      />
      <path
        d="M25.94 24.06L18.87 31.13"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.633 25.999L16.17 25.181C15.789 25.091 15.655 24.618 15.931 24.341L18.685 21.587C18.87 21.402 19.121 21.296 19.384 21.294L22.489 21.267"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.8789 21.975L33.6869 18.087C33.9069 17.029 32.9709 16.093 31.9129 16.313L28.0249 17.121C26.8799 17.359 25.8299 17.926 25.0039 18.753L21.8139 21.942C20.5969 23.159 19.8049 24.737 19.5549 26.44L19.5439 26.513C19.3859 27.6 19.7499 28.697 20.5259 29.474V29.474C21.3019 30.25 22.3999 30.614 23.4869 30.455L23.5599 30.444C25.2629 30.195 26.8409 29.402 28.0579 28.185L31.2469 24.996C32.0739 24.17 32.6409 23.12 32.8789 21.975V21.975Z"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.4 17.714C28.711 19.29 30.71 21.289 32.286 23.6"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 30.367L24.818 33.83C24.908 34.211 25.381 34.345 25.658 34.069L28.412 31.315C28.597 31.13 28.703 30.879 28.705 30.616L28.732 27.511"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RocketSVG;
