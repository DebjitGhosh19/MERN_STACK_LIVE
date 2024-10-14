import { Code} from 'lucide-react';
import Section from "./Section";
import Pill from "./pill";
const Skills=()=>{
  const SkillList=["JavaScript","React","Node.js","Python","SQL","Git","AWS","Docker"];
return <>
<Section logo={ <Code />} sectionTital="Skills">
<Pill arr={SkillList} />
</Section>
</>
}
export default Skills;