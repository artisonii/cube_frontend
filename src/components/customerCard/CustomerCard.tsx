import React from "react"
import styles from "./CustomerCard.module.css"

interface CustomerCardProp{
    name:string,
    details:string,
    className:string
}
const CustomerCard :React.FC<CustomerCardProp> = ({name,details, className}) => {
    console.log(className)
  return (
    <div className={styles[className]}>
     <h1 className={styles.heading}>{name}</h1>
     <p>{details}</p>
    </div>
  )
}

export default CustomerCard