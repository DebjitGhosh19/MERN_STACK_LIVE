import { Briefcase } from 'lucide-react';
import Section from "../Section";
import Projects from './Projects';
import TechnologyList from "./TechnologyList";

const Project=()=>{
  const Ecom=["React","Node.js","MongoDB","Stripe"];
  const smd=["vue.js","D3.js","Express","PostgreSQL"];
return <Section logo={ <Briefcase/> } sectionTital="Projects">
<Projects projectTitel="E-commerce Platform">
  <p className='text-gray-500 mb-2'>Developed a full-functional e-commerce platform with user authentication, product management, and payment integration</p>
  <TechnologyList arr={Ecom} />
</Projects>
<Projects projectTitel="Social Media Dashbord">
  <p className='text-gray-500 mb-2'>Create a responsive dashbord for social media analytics, featching real-time data visualization and reporting.</p>
  <TechnologyList arr={smd} />
</Projects>
</Section>
}
export default Project;