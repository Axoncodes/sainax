import Plan from "../plan"
import style from "./plan.module.css"

export default function Support({supportPlans}) {
  return (
    <section className={style.plans}>
      {supportPlans.map(({id, title, currency, tag, price, priceDate, priceRateOff, off, primary, options}, key) => (
        <Plan
          key={key}
          title={title}
          currency={currency}
          price={price}
          priceDate={priceDate}
          priceRateOff={priceRateOff}
          off={off}
          primary={primary}
          options={options}
          tag={tag}
          id={id}
        />
      ))}
    </section>
  )
}