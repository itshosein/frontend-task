import React from "react";

interface ArrowSVGProps {
  width: number;
  height: number;
  color: string;
}

const ArrowSVG: React.FC<ArrowSVGProps> = (props) => {
  const { color, height, width } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10L12 14L16 10"
        stroke={`var(--${color})`}
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowSVG;
