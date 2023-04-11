import React from 'react';
import classNames from 'classnames';
import { Sin } from '../../Common';
import maskSrc from './mask.png';

type Props = {
  id: number;
  sin: Sin;
  level: number;
  size?: number;
};

export const SkillIcon = ({ id, sin, level, size = 256 }: Props) => {
  const innerMask: React.CSSProperties = {
    WebkitMaskImage: `url(${maskSrc})`,
    WebkitMaskSize: `contain`,
    WebkitMaskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskImage: `url(${maskSrc})`,
    maskSize: `contain`,
    maskPosition: "center",
    maskRepeat: "no-repeat",
  };
  const innerClass = classNames(
    "absolute top-1/2 left-1/2 w-1/2",
    "transform -translate-x-1/2 -translate-y-1/2",
    "-z-20",
  );

  const frameSrc = "https://assets.limbuscodex.com/SkillFrame/" + sin.name + "/" + level + ".png";
  const frameStyle: React.CSSProperties = {
    WebkitMaskImage: `url(${frameSrc})`,
    WebkitMaskSize: "contain",
    WebkitMaskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskImage: `url(${frameSrc})`,
    maskSize: "contain",
    maskPosition: "center",
    maskRepeat: "no-repeat",
    backgroundImage: `url(${frameSrc})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundBlendMode: "multiply",
    backgroundColor: sin.color,
  };

  return (
    <div className='relative select-none' style={{ width: size, height: size }}>
      <img
          src={"https://assets.limbuscodex.com/SkillIcon/" + id + ".png"}
          className={innerClass}
          style={innerMask} />
      <div className='absolute w-full h-full -z-10' style={frameStyle}></div>
    </div>
  );
};