import { Flex } from "@chakra-ui/react";
import { SkillCoin } from "./Components";
import { Sin } from "./Common";

export default ({}) => {
  return (
    <div>
      <div>Hello, stinky!</div>
      <Flex justify="start">
        <SkillCoin skillId={1020401} sin={Sin.VIOLET} level={1} size={196} />
        <SkillCoin skillId={1020402} sin={Sin.SCARLET} level={2} size={196} />
        <SkillCoin skillId={1020403} sin={Sin.INDIGO} level={3} size={196} />
        <SkillCoin skillId={1020404} sin={Sin.NONE} level={1} size={196} />
      </Flex>
      <img src="https://assets.limbuscodex.com/test_identity/10204_normal_profile_support_personality.png" />
    </div>
  );
};