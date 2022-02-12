import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Toilet = () => {
  const [detail, setDetail] = useState()
  const { roomID } = useParams()

  useEffect(() => {
      const interval = setInterval(() => {
      RoomStatus(1).then((data) => {
      setDetail(Object.entries(data))
      console.log('time')
      }, 10000);
      return () => clearInterval(interval);
    })
  }, [roomID]);

  async function RoomStatus(id) {
  // var config = {
  //   headers: {'Access-Control-Allow-Origin': '*'}
  // };
  const res = await axios.get(
    `https://ecourse.cpe.ku.ac.th/exceed03/api/room-status/1`
    )
    return res.data
  }


  return (
    <div style={{display: "flex", justifyContent: "space-evenly", padding: "30% 0"}}>
      <table style={{backgroundColor: "red"}}>
        <tr>
          <th>{ detail[0] }</th>
        </tr>
        <tr>
          <th>{!detail[1] && <h1>available</h1>}</th>
        </tr>
        <tr>
          <td>{ detail[2] }</td>
        </tr>
        <tr>
          <td>{ detail[4] }</td>
        </tr>
      </table>
      <table style={{backgroundColor: "red"}}>
        <tr>
          <th>{ detail[0] }</th>
        </tr>
        <tr>
          <th>{!detail[1] && <h1>available</h1>}</th>
        </tr>
        <tr>
          <td>{ detail[2] }</td>
        </tr>
        <tr>
          <td>{ detail[4] }</td>
        </tr>
      </table>
      <table style={{backgroundColor: "red"}}>
        <tr>
          <th>{ detail[0] }</th>
        </tr>
        <tr>
          <th>{!detail[1] && <h1>available</h1>}</th>
        </tr>
        <tr>
          <td>{ detail[2] }</td>
        </tr>
        <tr>
          <td>{ detail[4] }</td>
        </tr>
      </table>
      { detail }
    </div>
  )
}
export default Toilet;