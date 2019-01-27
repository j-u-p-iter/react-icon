import * as React from "react";

export interface IProps extends React.HTMLAttributes<SVGElement> {
  name: string;
  className: string;
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  svgSpritePath: string;
  children: never;
}

export const Icon: React.SFC<IProps> = ({
  name,
  className,
  onClick,
  svgSpritePath,
  ...restProps
}) => (
  <svg
    role="img"
    name={name}
    className={className}
    onClick={onClick}
    viewBox="0 0 16 16"
    {...restProps}
  >
    <use xlinkHref={`${svgSpritePath}#${name}`} />
  </svg>
);
