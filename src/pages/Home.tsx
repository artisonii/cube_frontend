import { useState, useRef } from 'react';
import { Data } from '../data';
import CustomerCard from '../components/customerCard/CustomerCard';
import CustomerDetails from "../components/customerDetails/CustomerDeatils"

import styles from './Home.module.css';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [customers, setCustomers] = useState(Data);
  const detailsSectionRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
      if (
        detailsSectionRef.current &&
        (detailsSectionRef.current.scrollTop + detailsSectionRef.current.clientHeight >= detailsSectionRef.current.scrollHeight-10)
      ) {

        let arr = [] 
        for(let i = customers.length+1; i<=customers.length+10;i++){
          arr.push({name:"Customer "+i,details:customers[0].details,imageUrl:customers[0].imageUrl})
        }
        setCustomers([...customers, ...arr]);
      }
    };

  return (
    <div id={styles.container}>
      <h1>This here is the heading</h1>
      <div className={styles.detailsSection}>
        <div  ref={detailsSectionRef} onScroll={handleScroll}>
          {customers.map((ele, ind) => {
            return (
              <div key={ind} onClick={() => setIndex(ind)}>
                <CustomerCard
                  className={ind === index ? "cardGrey" : "cardWhite"}
                  name={ele.name}
                  details={ele.details}
                />
              </div>
            );
          })}
        </div>

        <div>
          <CustomerDetails {...customers[index]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
