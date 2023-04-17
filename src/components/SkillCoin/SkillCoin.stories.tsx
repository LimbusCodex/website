import { SimpleGrid } from "@chakra-ui/react";
import type { Meta, StoryObj } from '@storybook/react';
import { Sin } from "@/types";
import { SkillCoin } from "./SkillCoin";

const meta = {
  title: 'Components/SkillCoin',
  component: SkillCoin,
} satisfies Meta<typeof SkillCoin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    skillId: 1020401,
    sin: Sin.VIOLET,
    level: 1,
  },
};

const frames = Sin.all().flatMap(sin => {
  if (sin == Sin.NONE) {
    return [];
  }
  return [
    {sin: sin, level: 1},
    {sin: sin, level: 2},
    {sin: sin, level: 3},
  ];
});
frames.push({sin: Sin.NONE, level: 1});

const size = 196;
export const AllFrames = () => (
  <SimpleGrid columns={6} justifyContent="start" gap={0} maxW={size * 6}>
      {frames.map(f => (
        <SkillCoin
            key={`${f.sin.name}-${f.level}`}
            skillId={1020404}
            sin={f.sin}
            level={f.level}
            size={size}
        />
      ))}
  </SimpleGrid>
);

export const UnknownSkillId: Story = {
  args: {
    skillId: 0,
    sin: Sin.AMBER,
    level: 2
  }
};

export const UnknownLevel: Story = {
  args: {
    skillId: 1020402,
    sin: Sin.SCARLET,
    level: 4,
  },
};