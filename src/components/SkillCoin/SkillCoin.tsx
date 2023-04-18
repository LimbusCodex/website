import { Box, Image, Square } from '@chakra-ui/react';
import { CSSProperties, useEffect, useState } from 'react';
import { Sin } from '@/types';
import blankSkill from './assets/fallback.png';
import maskSrc from './assets/mask.png';
import defaultFrame from './assets/Neutral/1.png';

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
    const desiredFrame = new URL(`./assets/${sin.name}/${level}.png`, import.meta.url);
    fetch(desiredFrame).then(
      resp => {
        if (resp.ok) {
          setFrameSrc(desiredFrame.href);
        }
      },
      () => {}
    );
  }, [sin.name, level]);

  const innerMask: CSSProperties = {
    maskImage: `url(${maskSrc})`,
    maskSize: `contain`,
    maskPosition: "center",
    maskRepeat: "no-repeat",
  };

  const frameStyle: CSSProperties = {
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
        size={`${size}px`}
        zIndex={-20}
    >
      <Image
          src={`https://assets.limbuscodex.com/SkillIcon/${skillId}.png`}
          fallbackSrc={blankSkill}
          position="absolute"
          w="50%"
          h="50%"
          zIndex={-20}
          sx={innerMask}
      />
      <Box as="span" w="100%" h="100%" zIndex={-10} sx={frameStyle} />
    </Square>
  );
};