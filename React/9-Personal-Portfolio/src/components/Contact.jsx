import { Globe } from 'lucide-react';
import Section from "./Section";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import SocialIcon from './SocalIcon';


const Contact=()=>{
  const socalitem=[{title:"Linkedin",logo:<Linkedin />,url:"https://www.linkedin.com/in/debjit-ghosh-328005253/"}
    ,{title:"Github",logo:<Github />,url:"https://github.com/DebjitGhosh19"},
    {title:"Twitter",logo:<Twitter />,url:"#"}
  ]
return <Section logo={<Globe/>} sectionTital="Contact & Social Media">
  <div className='mb-3'>
   <p>Email:ghoshdebjit.2002@gmail.com</p>
   <p>Phone:7449705009</p>
   {socalitem.map((item)=><SocialIcon text={item.title} icon={item.logo} url={item.url} key={item.title}/>)}
  </div>

      

 

</Section>
}
export default Contact;