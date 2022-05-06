import Link from 'next/link'
import style from './style.module.css'
import priceStr from '../../lib/priceStr'

export default function Plan({ id, primary, off, tag, title, price, currency, priceDate, priceRateOff, options }) {
  return (
    <section className={`${style.plan} ${primary ? style.primary : ''}`}>
      {off ? <p className={style.off}><span>-{off}%</span></p> : ''}
      {tag ? <p className={style.off}><span>{tag}</span></p> : ''}
      <p className={style.title}>{title}</p>
      <p className={style.price}>
        <span>
          <span className={style.currency}>{currency}</span>
          <span className={style.number}>{priceStr(parseInt(price * ((100 - off)/100)))}</span>
          <span className={style.priceDate}>/{priceDate}</span>
        </span>
        {off ? <span className={style.originalPrice}>
          <span className={style.currency}>{currency}</span>
          <span className={style.number}>{priceStr(price)}</span>
          <span className={style.priceDate}>/{priceDate}</span>
        </span> : ''}
      </p>
      <hr className={style.hr}/>
      <ul className={style.options}>
        {options.map((item, key) => (
          <li key={key}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <hr className={style.hr}/>
      <p className={style.text}>How long do you need our professional support for?</p>
      <select className={style.select}>
        <option value={'1Month'}>1 Month - {priceStr(parseInt(price * ((100 - off)/100)))} {currency}</option>
        <option value={'3Months'}>3 Months - {priceStr(parseInt((price*3) * (1-priceRateOff) * ((100 - off)/100)))} {currency}</option>
        <option value={'6Months'}>6 Months - {priceStr(parseInt((price*6) * (1-priceRateOff) * ((100 - off)/100)))} {currency}</option>
        <option value={'1Year'}>1 Year - {priceStr(parseInt((price*12) * (1-priceRateOff) * ((100 - off)/100)))} {currency}</option>
        <option value={'2Years'}>2 Years - {priceStr(parseInt((price*24) * (1-priceRateOff) * ((100 - off)/100)))} {currency}</option>
      </select>
      <hr className={style.hr}/>
      <Link href={`/checkout/${id}`}>
        <a className={style.button}>
          <span>Choose this plan</span>
        </a>
      </Link>
    </section>
  )
}
