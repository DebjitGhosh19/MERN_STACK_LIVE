import { Award } from 'lucide-react';
import Section from "./Section";
import Lists from './Lists';
const ExtracurricularActivities=()=>{
  const HobbieItem=["Volunteer at local coding bootcamp for underprivileged youth","Organizer of city-wide hackathon event","Member of the University"]
return <Section logo={ <Award />} sectionTital="ExtracurricularActivities">
<Lists listItem={HobbieItem}/>
</Section>
}
export default ExtracurricularActivities;