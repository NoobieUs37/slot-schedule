import { useState } from "react"
import { userIdRange } from "../idRange"
import "./css/App.css"

function Auth() {
    const [authDetails, setAuthDetails] = useState({
        userType: '',
        identificationNumber: '',
        password: ''
    }) 

    function handleAuthDetails(event) {
        let name = event.target.name
        setAuthDetails((prevAuthDetails) => {
            return {...prevAuthDetails, userType: name}
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        let {userType, identificationNumber} = authDetails
        if (identificationNumber >= userIdRange[userType].from === false || identificationNumber <= userIdRange[userType].to === false) {
            alert('Invalid user')
            return
        }
    }

    return (
    <>
        {authDetails.userType === '' ?  
        <div className="auth">
            <div className="user-btns">
                <button name="Student" onClick={handleAuthDetails}>Student</button>
                <button name="Faculty" onClick={handleAuthDetails}>Faculty</button>
            </div>
        </div> : 
        <div className="auth-form">
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label>Identification Number</label> <br />
                    <input type="number" value={authDetails.identificationNumber} name="identificationNumber" onChange={(event) => setAuthDetails((prevAuthDetails) => {
                        return {...prevAuthDetails, identificationNumber: parseInt(event.target.value)}
                    })}  />
                </div>
                <div className="form-group">
                    <label>Password</label> <br />
                    <input type="password" value={authDetails.password} name="password" onChange={(event) => setAuthDetails((prevAuthDetails) => {
                        return {...prevAuthDetails, password: event.target.value}
                    })} />
                </div>
                <div className="auth-btns">
                    <button>Login</button>     
                </div>
            </form>
        </div>
        }
    </>
  )
}

export default Auth