import React from "react";

interface HomeProps {
  width: number;
  height: number;
  color: string;
}

const HomeSVG: React.FC<HomeProps> = (props) => {
  return (
    <svg
      width={`${props.width}`}
      height={`${props.height}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.842 8.29901L13.842 3.63201C12.759 2.78901 11.242 2.78901 10.158 3.63201L4.158 8.29901C3.427 8.86701 3 9.74101 3 10.667V18C3 19.657 4.343 21 6 21H18C19.657 21 21 19.657 21 18V10.667C21 9.74101 20.573 8.86701 19.842 8.29901Z"
        stroke={`var(--${props.color})`}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default HomeSVG;
