import React from "react";

interface DurationClockSVGProps {
  width: number;
  height: number;
  color: string;
}

const DurationClockSVG: React.FC<DurationClockSVGProps> = (props) => {
  const { color, height, width } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path
          d="M46.9675 9.96675C76.2593 -19.3251 123.743 -19.3251 153.035 9.96675C182.327 39.2586 182.327 86.7423 153.035 116.034C123.743 145.326 76.2593 145.326 46.9675 116.034C17.6756 86.7423 17.6756 39.2586 46.9675 9.96675"
          stroke={`var(--${color})`}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path
          d="M100.068 46.3337C90.8011 46.3337 83.3345 53.8004 83.3345 63.0004C83.3345 72.2004 90.8011 79.6671 100.001 79.6671C109.201 79.6671 116.668 72.2004 116.668 63.0004C116.734 53.8004 109.268 46.3337 100.068 46.3337"
          stroke={`var(--${color})`}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path
          d="M145.985 54.5175C146.535 57.2675 146.877 60.0842 146.877 63.0009"
          stroke={`var(--${color})`}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path
          d="M100.001 16.1252C102.917 16.1252 105.734 16.4586 108.484 17.0169"
          stroke={`var(--${color})`}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path
          d="M53.1254 63.0004C53.1254 37.1171 74.117 16.1254 100 16.1254"
          stroke={`var(--${color})`}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path
          d="M111.834 51.1673L133.168 29.834"
          stroke={`var(--${color})`}
          strokeWidth="8"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default DurationClockSVG;
