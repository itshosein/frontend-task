import React from "react";

interface CalendarSVGProps {
  width: number;
  height: number;
  color: string;
}

const CalendarSVG: React.FC<CalendarSVGProps> = (props) => {
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
        d="M7.49813 2.99625V5.9975"
        stroke={`var(--${color})`}
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5019 2.99625V5.9975"
        stroke={`var(--${color})`}
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.99622 9.49896H21.0037"
        stroke={`var(--${color})`}
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2.99622"
        y="4.49687"
        width="18.0075"
        height="16.5069"
        rx="3"
        stroke={`var(--${color})`}
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarSVG;
