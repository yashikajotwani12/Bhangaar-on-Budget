import React, { useState, useContext } from 'react'
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
function Register() {
    const history = useHistory()
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [password,setpassword] = useState();
    const [phone,setphone] = useState();
    const [location,setlocation] = useState();

    const submit = async(e)=>{
        e.preventDefault();
        const user_register = await axios.post('https://bhangaar-api.herokuapp.com/register',{name,email,password,phone,location});
        if(user_register.status === 201){
            alert('User Registered Successfully');
            history.push('login');
        }
        else if(user_register.status === 401){
            alert('User Already Exist');
            history.push('login')
        }
    }

    return (
        <div class="login_register">
            <div className="left">
                <a href="#">Bhangaar On Budget</a>
                <img src="https://pratibharana.com/wp-content/uploads/2021/04/web-development-banner.jpg" alt="" />
                <h3>
                Don't know what to do with the pile of garbage? <br />
                        <b><i>Sell or Donate</i></b> us in <b><i>Bhangaar on Budget</i></b> and get exciting and reasonable refunds.
                </h3>
            </div>
            <div className="right">
                <h2>Welcome</h2>
                <h4>Sign Up for your Account</h4>
                <div className="inputfields">
                    <p>Name</p>
                    <input type="text" autoFocus="true" value={name} onChange={e=>setname(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Email</p>
                    <input type="text" value={email} onChange={e=>setemail(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Password</p>
                    <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Phone Number</p>
                    <input type="text" value={phone} onChange={e=>setphone(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Location</p>
                    <input type="text" value={location} onChange={e=>setlocation(e.target.value)} />
                </div>
                <button onClick={submit} >Register</button>
                <p className="para">Already have account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register