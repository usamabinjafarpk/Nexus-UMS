import axios from 'axios'
import React, { useState } from 'react'

export default function Register() {
  const [id, setId] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [dob, setDob] = useState("")
  const [std, setStd] = useState("")
  const [section, setSection] = useState("")


  function Reg(){
    let reg={
      id: id,
  fName: fname,
  lName: lname,
  eMail: email,
  number: number,
  dob: "2024-02-06T10:00:10.604Z",
  clss: std,
  section: section
    }
    axios.post("http://localhost:5099/api/Student/Register_student",reg)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
  }
  return (
    <div>
        <h1>Register</h1>
        <table>
            <tr>
                <td>Student ID:</td>
                <td>
                    <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>First Name:</td>
                <td>
                    <input type='text' value={fname} onChange={(e)=>setFname(e.target.value)}  />
                </td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td>
                    <input type='text' value={lname} onChange={(e)=>setLname(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </td>
            </tr>
            <tr>
                <td>Number:</td>
                <td>
                    <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
                </td>
            </tr>
            <tr>
                <td>Dob:</td>
                <td>
                    <input type='text' value={dob} onChange={(e)=>setDob(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>Class:</td>
                <td>
                    <input type='text' value={std} onChange={(e)=>setStd(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>Section:</td>
                <td>
                    <input type='text' value={section} onChange={(e)=>setSection(e.target.value)} />
                </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                <button onClick={Reg}>Register</button>
              </td>
            </tr>
        </table>
    </div>
  )
}
