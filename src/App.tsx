import { Sin } from "./Common";
import { SkillIcon } from "./Components";

export default ({}) => {
  return (
    <div>
      <div>Hello, World!</div>
      <div className="flex justify-start">
        <SkillIcon id={1020401} sin={Sin.VIOLET} level={1} size={196} />
        <SkillIcon id={1020402} sin={Sin.SCARLET} level={2} size={196} />
        <SkillIcon id={1020403} sin={Sin.INDIGO} level={3} size={196} />
        <SkillIcon id={1020404} sin={Sin.NONE} level={1} size={196} />
      </div>
      <img src="https://assets.limbuscodex.com/test_identity/10204_normal_profile_support_personality.png" />
    </div>
  );
};