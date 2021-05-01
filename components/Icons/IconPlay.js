import * as React from "react";

function IconPlay(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={70}
      viewBox="0 0 70 70"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx={35} cy={35} r={35} fill="#55D040" />
        <path
          fill="#FFF"
          d="M48.827 35.874l-22.141 12.3A1 1 0 0125.2 47.3V22.7a1 1 0 011.486-.875l22.14 12.3a1.001 1.001 0 01.001 1.75z"
        />
      </g>
    </svg>
  );
}

export default IconPlay;
