import React from "react";

interface MapProps {
  width: number;
  height: number;
  color: string;
}

const MapSVG: React.FC<MapProps> = (props) => {
  const { color, height, width } = props;

  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10C15 10 18.502 7.125 18.502 4.5C18.502 2.567 16.934 1 15 1C13.066 1 11.498 2.567 11.498 4.5C11.498 7.125 15 10 15 10Z"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.001 4.35001C15.139 4.35001 15.251 4.46201 15.25 4.60001C15.25 4.73801 15.138 4.85001 15 4.85001C14.862 4.85001 14.75 4.73801 14.75 4.60001C14.75 4.46201 14.862 4.35001 15.001 4.35001"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.531 4.02499C6.78 4.27099 3 8.18799 3 13C3 17.971 7.029 22 12 22C16.971 22 21 17.971 21 13C21 10.348 19.848 7.97199 18.023 6.32899"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 21.068V20.997C8 18.997 12 19.233 12 16.997C12 14.997 9 14.997 9 11.997C9 9.16901 7 8.99701 4 8.99701H3.939"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.97 19.72C17.819 19.662 17.669 19.601 17.526 19.517C16.09 18.677 15.608 16.833 16.447 15.397C17.287 13.961 19.131 13.479 20.567 14.318C20.673 14.38 20.762 14.458 20.858 14.53"
        stroke={`var(--${color})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MapSVG;
