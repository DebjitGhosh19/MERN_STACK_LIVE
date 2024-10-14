const SocialIcon=({icon, text,url})=>{
  return <a className="flex text-blue-600 m-2 hover:text-blue-900 " href={url}>{icon} <samp className="ml-1">{text}</samp> </a>
}
export default SocialIcon;