import { Heart} from 'lucide-react';
import Section from "./Section";
import Lists from './Lists';
const Hobbies=()=>{
  const HobbieItem=["Photography","Hiking","Playing guitar","Reading Sci-fi novels"]
return <Section logo={ <Heart />} sectionTital="Hobbies & Interests">
<Lists listItem={HobbieItem}/>
</Section>
}
export default Hobbies;