import  { useState } from 'react'
import { Data } from '../data'
import CustomerCard from '../components/customerCard/CustomerCard'
import CustomerDeatils from '../components/customerDetails/CustomerDeatils'
import styles from "./Home.module.css"
const Home = () => {

    const[index,setIndex]=useState(0)
  return (
    <div id={styles.container}>
        <h1>This here is the heading</h1>
        <div className={styles.detailsSection}>
            <div>
              {
                Data.map((ele,ind)=>{
                    return (
                        <div onClick={()=>{setIndex(ind)}}>

                            <CustomerCard className ={ind===index?"cardGrey":"cardWhite"} name={ele.name} details={ele.details}/>
                        </div>
                    )
                })
              }  
            </div>

            <div>
                <CustomerDeatils {...Data[index]}/>
            </div>
        </div>

    </div>
  )
}

export default Home