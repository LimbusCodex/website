import { AbsoluteCenter, Box, Image, Square } from '@chakra-ui/react';
import { CSSProperties, useEffect, useState } from 'react';
import { Sin } from '../../Common';

import maskSrc from './mask.png';
import blankSkill from './fallback.png';
import defaultFrame from './Neutral/1.png';

export interface Props {
  skillId: number;
  sin: Sin;
  level: number;
  size?: number;
}

export const SkillCoin = ({ skillId, sin, level, size = 196 }: Props) => {
  const [frameSrc, setFrameSrc] = useState(defaultFrame);

  useEffect(() => {
    // switch to the desired frame only if it exists, otherwise defaultFrame is used
    setFrameSrc(defaultFrame);
    const desiredFrame = new URL(`./${sin.name}/${level}.png`, import.meta.url);
    fetch(desiredFrame).then(resp => {
      if (resp.ok) {
        setFrameSrc(desiredFrame.href);
      }
    });
  }, [sin.name, level]);

  const innerMask: CSSProperties = {
    WebkitMaskImage: `url(${maskSrc})`,
    WebkitMaskSize: `contain`,
    WebkitMaskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskImage: `url(${maskSrc})`,
    maskSize: `contain`,
    maskPosition: "center",
    maskRepeat: "no-repeat",
  };

  const frameStyle: CSSProperties = {
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
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "multiply",
    backgroundColor: sin.color,
  };



  return (
    <Square
        position="relative"
        userSelect="none"
        pointerEvents="none"
        size={size + "px"}
        zIndex={-20}>
      <AbsoluteCenter zIndex={-20}>
        <Image
            src={"https://assets.limbuscodex.com/SkillIcon/" + skillId + ".png"}
            fallbackSrc={blankSkill}
            sx={innerMask} />
      </AbsoluteCenter>
      <Box position="absolute" w="full" h="full" zIndex={-10} style={frameStyle} />
    </Square>
  );
};