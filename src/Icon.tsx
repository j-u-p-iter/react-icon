import * as React from "react";

interface IProps {
  name: string;
  className: string;
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  svgSpritePath: string;
}

export const Icon: React.SFC<IProps> = ({
  name,
  className,
  onClick,
  svgSpritePath
}) => (
  <svg
    role="img"
    name={name}
    className={className}
    onClick={onClick}
    viewBox="0 0 16 16"
  >
    <use xlinkHref={`${svgSpritePath}#${name}`} />
  </svg>
);
