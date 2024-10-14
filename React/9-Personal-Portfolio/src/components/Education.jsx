import { BookOpen } from 'lucide-react';
import Section from "./Section";
import Degree from './Degree';
const Education=()=>{
  const degree=[{bord:"Webscte",dept:"Diploma in CST",year:"2020-2023"},
                {bord:"Makaut Univercity",dept:"B.Tech in CSE",year:"2023-2026"},
                {bord:"Complete Coding",dept:"Mern Stack Live",year:" 2024"}
  ]
return <Section logo={<BookOpen />} sectionTital="Education">
  {degree.map((item)=><Degree bord={item.bord} dept={item.dept} year={item.year} key={item.bord}/>)}

</Section>
}
export default Education;