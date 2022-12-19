import dynamic from "next/dynamic"

const Image = dynamic(() => import("../../axg-react/Image"), {ssr: false})
const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false})
import Statics from "../../axg-react/Statics"
import formStyle from './form.module.css'

import Head from "next/head"

import ProductionForm from "../ProductForm"

export default function Product({image, alt, name, price, currency, description, features, area}) {

  return (
    <>
      <Head>
        <title>{name.name}</title>
      </Head>
      <section
        // onClick={closePopup}
        id="mainContent"
        className={`rtl container splitToLeft horizontal ${formStyle.outerDom}`}
      >
        {image ? <section className="subcontainer">
          <div style={{display: 'block', width:'100%', height: '100%', position: 'relative'}}>
             <Image
              src={image}
              loading={'eager'}
              alt={alt}
              customclasses={'round_l1'}
            />
          </div>
        </section> : ''}
        <section className="subcontainer">
          <section className="subcontainer centerOnTablet" style={{rowGap: '0px'}}>
            <section className="subcontainer" style={{columnGap: '7px', width: 'fit-content'}}>
            {/* title */}
              <Text text={name.name} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l7-text-fontSize)"} inlineStyle={{marginTop: `-1.8%`, marginBottom: '1%'}} />
            </section>
            {/* price */}
            {price ? (
              <section className="subcontainer" style={{columnGap: '7px', width: 'fit-content'}}>
                <Text text={price} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} inlineStyle={{letterSpacing: '2px'}} />,
                <Text text={currency} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} />
              </section>
            ) : ''}
          </section>
          {/* description */}
          <Text text={description} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l3-text-fontSize)"} />
          {/* request button */}
          <section className="subcontainer centerOnTablet" style={{rowGap: '0px'}}>
            <Button
              text={'ثبت سفارش'}
              iconclasses={'font_l3 round_l1 fa-solid fa-cart-plus'}
              innerclasses={'padding_l2 round_l1'}
              customclasses={'rtl'}
              size={'medium'}
              bg={'var(--blue)'}
              color={'var(--light)'}
              plane={'1'}
              id={'orderbtn'}
              textclasses={'betterwordspacing'}
            />
            <Text textclasses={'nomargin'} text={"*بزودی بعد ثبت درخواست و پر کردن فرم, با شما تماس گرفته خواهد شد"} color={"var(--secondaryTextColor)"} textfontsize={"var(--l1-text-fontSize)"} />
          </section>

          {/* separator */}
          <section className="subcontainer separator"></section>
          
          {/* Product features list */}
          {features ? (
            <section className="subcontainer">
              <section className="subcontainer">
                <Text textclasses={'nomargin'} text={"ویژگی های محصول"} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l4-text-fontSize)"} />
              </section>
              <section className="subcontainer">
                <Statics
                  inlineStyle={{width: 'fit-content'}}
                  mode='list'
                  data={features.map(feature => ([...feature, 1]))}
                />
              </section>
            </section>
          ) : ''}
        </section>
      </section>
      <ProductionForm
        visible={false}
        area={area}
        name={name}
      />
    </>
  )
}
