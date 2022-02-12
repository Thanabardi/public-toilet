import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Toilet = () => {
  const [room1, setRoom1] = useState()
  const [room2, setRoom2] = useState()
  const [room3, setRoom3] = useState()
  // const { roomID } = useParams()

  useEffect(() => {
    const interval = setInterval(() => {
    RoomStatus(1).then((data) => {
    setRoom1(Object.entries(data))
    })
    RoomStatus(2).then((data) => {
    setRoom2(Object.entries(data))
    })
    RoomStatus(3).then((data) => {
    setRoom3(Object.entries(data))
    })
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  async function RoomStatus(id) {
  const res = await axios.get(
    `https://ecourse.cpe.ku.ac.th/exceed03/api/room-status/${id}`
    )
    return res.data
  }


  return (
    <div style={{display: "flex", justifyContent: "space-evenly", padding: "30% 0"}}>
      {/* <table style={{backgroundColor: "red"}}>
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
      </table> */}
      { room1 }
      { room2 }
      { room3 }
    </div>
  )
}
export default Toilet;