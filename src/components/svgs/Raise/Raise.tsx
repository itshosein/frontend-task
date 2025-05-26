import React from "react";

interface RaiseSVGProps {
  width: number;
  height: number;
  color: string;
}

const RaiseSVG: React.FC<RaiseSVGProps> = (props) => {
  const { color, height, width } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.7742 46.0416L26.7742 59.2166"
        stroke={color}
        strokeOpacity="0.2"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M40.7983 37.5416L40.7983 59.2166"
        stroke={color}
        strokeOpacity="0.2"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M54.8267 25.217L54.8267 59.217"
        stroke={color}
        strokeOpacity="0.2"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M12.75 50.2916L12.75 59.2166"
        stroke={color}
        strokeOpacity="0.2"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M8.85213 39.3946C8.85213 39.3946 19.5461 36.0607 32.1571 27.4605C50.6356 14.8588 52.2902 4.76963 52.2902 4.76963M52.2902 4.76963L42.2525 7.33251M52.2902 4.76963L55.8708 13.9364"
        stroke={color}
        strokeOpacity="0.4"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RaiseSVG;
