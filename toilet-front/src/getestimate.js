import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Getestimate = () => {
    const [avg, setAvg] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
        AverageTime.then((data) => {
            setAvg(Object.entries(data))
            console.log(avg)
        },1000);
        return () => clearInterval(interval);
        })
        
    },[]);
    
     
   
    async function AverageTime() {
        // var config = {
        //   headers: {'Access-Control-Allow-Origin': '*'}
        // };
        const res = await axios.get(
          `https://ecourse.cpe.ku.ac.th/exceed03/api/estimate`
          )

          // console.log(res.data.estimate)
          return res.data
        }

        return AverageTime()
}

export default Getestimate