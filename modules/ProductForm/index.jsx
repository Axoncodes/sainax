import axios from "axios"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import formStyle from '../Product/form.module.css'
const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false})

export default function ProductionForm({products, visible, area, name}) {
  const onSubmit = data => {
    data.preventDefault()
    const datastr = {
      firstName: data.target.fname.value,
      lastName: data.target.lname.value,
      tel: data.target.tel.value,
      email: data.target.email.value,
      transporterType: data.target.transportationType.value,
      quantityControl: data.target.quantity.value,
      good: data.target.product.selectedOptions[0].innerText,
      good_slug: data.target.product.selectedOptions[0].value,
      area: data.target.area.selectedOptions[0].innerText,
      area_slug: data.target.area.selectedOptions[0].value,
    }

    const config = {
      method: 'post',
      url: 'http://localhost:8271/ordersList',
      headers: {'Content-Type': 'application/json'},
      data: datastr
    }
    
    axios(config).then(response => {
      if (response.data.status.toLowerCase() == "ok") {
        orderForm.style.display = "none"
        formValidPop.style.display = "block"
      }
      else console.log(response.data)
    }).catch(error => console.log(error));
  }
    
  const openPopup = (() => {
    activationHandler.start('formCover')
    formCover.classList.add(formStyle.open)
    axg_naturalizer.classList.add(formStyle.shadowOuterDom)
  })

  const closePopup = (() => {
    activationHandler.end('formCover')
    formCover.classList.remove(formStyle.open)
    axg_naturalizer.classList.remove(formStyle.shadowOuterDom)
  })


  useEffect(() => {
    if (!visible) window.addEventListener('load', () => {
      axg_naturalizer.addEventListener("click", closePopup)
      orderbtn.addEventListener('click', openPopup)
    })
  }, [])

  const [transportedType, setTransportedType] = useState('none')

  const handleTransportedTypeChange = (event) => {
    document.querySelector('select[name="quantity"]').selectedIndex = 0
    const newData = event.target.value
    setTransportedType(newData)
  }

      
  return (<>
    <section id="formCover" className={visible ? formStyle.visibleformCover : formStyle.formCover}>
      <section id="formValidPop" className={formStyle.formValidPop}>سفارش شما ثبت شد, همکاران ما بزودی ما بزودی با شما تماس خواهند گرفت.</section>
      <form onSubmit={onSubmit} id="orderForm" className={'subcontainer vertical righty'}>
      <Text textclasses={'nomargin'} text={'لطفا اطلاعات خود را برای تماس وارد کنید'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l4-text-fontSize)"} />
      <section className={`subcontainer vertical ${!area || !name ? '' : 'hide'}`}>
        <Text textclasses={'nomargin'} text={'اطلاعات محصول'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} />
        <section className={'subcontainer vertical'}>
          <section className={'subcontainer horizontal rtl'}>
            <label className={'subcontainer vertical righty ltr'}>
              محصول
              <select className={'rtl wide'} name={'product'}>
                {name && name.name ? <option value={name.slug} selected>{name.name}</option> : <option value="none">هیچ کدام</option>}
                {products ? products.map(item => (<option value={item.slug}>{item.title}</option>)) : ''}
              </select>
            </label>
            <label className={'subcontainer vertical righty ltr'}>
              منطقه
              <select className={'rtl wide'} name={'area'}>
                {area && area.name ? <option value={area.slug} selected>{area.name}</option> : <option value="none">هیچ کدام</option>}
                {products ? products.map(item => (<option value={item.acf.order_area.slug}>{item.acf.order_area.name}</option>)) : ''}
              </select>
            </label>
          </section>
        </section>
      </section>
      <section className={'subcontainer vertical'}>
        <Text textclasses={'nomargin'} text={'اطلاعات حقیقی/حقوقی'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} />
        <section className={'subcontainer vertical'}>
          <section className={'subcontainer horizontal rtl'}>
            <label className={'subcontainer vertical righty ltr'}>
              نام / نام شرکت
              <input className={'rtl wide'} type={'text'} name={'fname'} placeholder={'نام / نام شرکت'} />
            </label>
            <label className={'subcontainer vertical righty ltr'}>
              نام خانوادگی
              <input className={'rtl wide'} type={'text'} name={'lname'} placeholder={'نام خانوادگی'} />
            </label>
          </section>
          <section className={'subcontainer horizontal rtl'}>
            <label className={'subcontainer vertical righty ltr'}>
              شماره تماس
              <input className={'wide'} type={'text'} name={'tel'} placeholder={'شماره تماس'} required/>
            </label>
            <label className={'subcontainer vertical righty ltr'}>
              ایمیل
              <input className={'wide'} type={'text'} name={'email'} placeholder={'ایمیل'} />
            </label>
          </section>
        </section>
      </section>
      <section className={'subcontainer vertical'}>
        <Text textclasses={'nomargin'} text={'اطلاعات باربری'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} />
        <section className={'subcontainer horizontal righty rtl'}>
          <label className={'subcontainer vertical righty ltr'}>
            نوع ماشین
            <select className={'rtl wide'} name={'transportationType'} onChange={handleTransportedTypeChange}>
              <option value={'none'}>هیچ کدام</option>
              <option value={'5to10'}>کامیونت 5 تا 10تن</option>
              <option value={'10to20'}>کامیون 10 تا 20تن</option>
              <option value={'20to30'}>تریلی 20 تا 30تن</option>
            </select>
          </label>
          <label className={'subcontainer vertical righty ltr'}>
            مقدار تناژ
            <select className={'rtl wide'} name={'quantity'}>
              <option value="none">هیچ کدام</option>
              <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={5}>5 تن - 100 پاکت</option>
              <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={6}>6 تن - 120 پاکت</option>
              <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={7}>7 تن - 140 پاکت</option>
              <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={8}>8 تن - 160 پاکت</option>
              <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={9}>9 تن - 180 پاکت</option>
              <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={10}>10 تن - 200 پاکت</option>

              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={10}>10 تن - 200 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={11}>11 تن - 220 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={12}>12 تن - 240 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={13}>13 تن - 260 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={14}>14 تن - 280 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={15}>15 تن - 300 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={16}>16 تن - 320 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={17}>17 تن - 340 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={18}>18 تن - 360 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={19}>19 تن - 380 پاکت</option>
              <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={20}>20 تن - 400 پاکت</option>

              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={20}>20 تن - 400 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={21}>21 تن - 420 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={22}>22 تن - 440 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={23}>23 تن - 460 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={24}>24 تن - 480 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={25}>25 تن - 500 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={26}>26 تن - 520 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={27}>27 تن - 540 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={28}>28 تن - 560 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={29}>29 تن - 580 پاکت</option>
              <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={30}>30 تن - 600 پاکت</option>
            </select>
          </label>
        </section>
      </section>
      <input className={'wide'} type={'submit'} value={'ارسال درخواست'} />
      </form>
    </section>
  </>)
}