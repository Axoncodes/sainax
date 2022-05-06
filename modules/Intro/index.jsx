import Text from "../../components/Text";

export default function Intro({mainText, subText}) {
  return (
    <div className='subcontainer vertical center'>
      <Text color="#fff" tag="h1" text={mainText} customClass={['mainText']}/> 
      <Text color="#fff" tag="h3" text={subText} customClass={['subMainText']}/> 
    </div>
  )
}