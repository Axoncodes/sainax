import dynamic from 'next/dynamic'
import Image from 'next/image'

const Accordion = dynamic(() => import('../../axg-react/Accordion'), {ssr: false,})

export default function Accordions({posts}) {

  const postsList = posts.map((post, key) => <Accordion
    key={key}
    text={post.title}
    content={post.content}
    active={key == 1 ? 'active' : ''}
    btnbg={'#fff'}
    btncolor={'var(--primaryTextColor)'}
    customclasses={'boxshadow accordions rtl'}
    btncustomclasses={'wide'}
    contentcustomclasses={'widePadding_l7'}
    contentinnercustomclasses={''}
    activemode={'class'}
    btninnerclasses={'padding_l3'}
    btntextclasses={'paragraph spread font_l4'}
  />)

  return (
    <section style={{backgroundColor: '#fff'}} className="container horizontal">
      <section className={'subcontainer'} style={{display: 'block'}}>
        <Image className={'round_l1'} src={'/images/christopher-gower-m_HRfLhgABo-unsplash-3.jpg'} layout='responsive' width={90} height={60} />
      </section>
      <section className={'subcontainer wide vertical norowgap'}>{postsList}</section>
    </section>
  )
}