import { useRef, useState } from 'react'
import "./css/AppSchedule.css"

function AddSchedule() {
    const [studentList, setStudentList] = useState([])
    const scheduleRef = useRef()
    const regNoRef = useRef()
    const nameRef = useRef()
    const [scheduleSlots, setScheduleSlots] = useState({
        slot1: 8,
        slot2: 4,
        slot3: 12,
        slot4: 8
    }) 

    function addStudent(event) {
        event.preventDefault()
        let schedule = scheduleRef.current.value
        let regNo = regNoRef.current.value
        let name = nameRef.current.value
        if (regNo === '') {
            alert('register number is required')
            return
        }
        if (name === '') {
            alert('name is required')
            return
        }
        setStudentList((prevStudentList) => [...prevStudentList, {schedule, name, regNo}])
        reset()
    }

    function reset() {
        scheduleRef.current.selectedIndex = 0
        regNoRef.current.value = ''
        nameRef.current.value = ''
    }

  return (
    <>
        <div className='student-container'>
            <div className='add-student'>
                <form onSubmit={addStudent}>
                    <div className="form-group">
                        <label>Choose Schedule</label> <br />
                        <select ref={scheduleRef}>
                            <option disabled={scheduleSlots.slot1 < 1}>Monday 10:00AM - 12:00Noon</option>
                            <option disabled={scheduleSlots.slot2 < 1}>Wednesday 04:00PM - 05:00PM</option>
                            <option disabled={scheduleSlots.slot3 < 1}>Thursday 08:30AM - 11:30AM</option>
                            <option disabled={scheduleSlots.slot4 < 1}>Friday 05:00PM - 07:00PM</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Register No</label> <br />
                        <input type="text" ref={regNoRef} placeholder="eg. 19uca037" />
                    </div>
                    <div className="form-group">
                        <label>Student Name</label> <br />
                        <input type="text" ref={nameRef} placeholder="eg. jack bauer" />
                    </div>
                    <div className="form-group">
                        <button className="btns">Add Student</button>
                    </div>
                </form>
            </div>
            <br />
            <div className='student-list'>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>RegNo</th>
                        </tr>
                    </thead>
                    <tbody style={{textAlign: 'center'}}>
                        <tr className='d-none'>
                            <td colSpan={3}><i>No data available</i></td>
                        </tr>
                            {studentList.length === 0 && <tr>
                                <th colSpan={3}><em>No data available</em></th>
                            </tr>}
                            {studentList.map((student, index) => {
                                return <tr key={index + 1}> 
                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.regNo}</td>
                                </tr>
                            })}
                    </tbody>
                </table>
                <br />
                <button className='btns' disabled={studentList.length === 0}>Book Slot</button>
            </div>
        </div>
    </>
  )
}

export default AddSchedule