import { AbsoluteCenter, Box, Image } from '@chakra-ui/react';
import { Sin } from '../../Common';
import { CSSProperties } from 'react';
import maskSrc from './mask.png';

type Props = {
  id: number;
  sin: Sin;
  level: number;
  size?: number;
};

export const SkillIcon = ({ id, sin, level, size = 256 }: Props) => {
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

  const frameSrc = new URL(`./${sin.name}/${level}.png`, import.meta.url).href;
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
    <Box position="relative" userSelect="none" pointerEvents="none" w={size} h={size}>
      <AbsoluteCenter zIndex={-20}>
        <Image
            src={"https://assets.limbuscodex.com/SkillIcon/" + id + ".png"}
            sx={innerMask} />
      </AbsoluteCenter>
      <Box position="absolute" w="full" h="full" zIndex={-10} sx={frameStyle} />
    </Box>
  );
};