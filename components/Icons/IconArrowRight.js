import * as React from "react";

function IconArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      {...props}
    >
      <defs>
        <filter id="prefix__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        filter="url(#prefix__a)"
        transform="translate(-1721 -327)"
        fill="none"
        fillRule="evenodd"
      >
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M1732.473 327.527a1.8 1.8 0 00-2.669 2.41l.124.136 14.686 14.685-14.686 14.686c-.66.66-.7 1.702-.124 2.41l.124.136a1.8 1.8 0 002.408.124l.137-.124 15.959-15.959c.659-.659.7-1.702.123-2.408l-.123-.137-15.959-15.959z"
        />
      </g>
    </svg>
  );
}

export default IconArrowRight;
