import { useRef,useContext } from "react";
import {context} from "../store";
import { useNavigate } from 'react-router-dom';
const CompleteReg=()=>{
    const navigate=useNavigate();
    const contextApi=useContext(context);
    const reg_id=contextApi.userdetails.id;
    let age=useRef();let gender=useRef();let nationality=useRef();let state=useRef();let qualification=useRef();let address=useRef();
    const saveDetails=async(e)=>{
        e.preventDefault();

        const formdata={"id":reg_id,"sex":age.current.value,"roll":gender.current.value,"college":nationality.current.value,"country":state.current.value,"state":qualification.current.value,"address":address.current.value};
        console.log(formdata);
            try {
                const response = await fetch('http://localhost:3001/api/completedetails', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ data: formdata }),
                });
          
                const result = await response.json();
                console.log(result.message);
                if(result.message==="Data inserted successfully"){
                    alert("Your Data saved Successfully! Please login Again");
                    navigate("/");
                }
              } catch (error) {
                console.log('Error:', error);
              }
    }
    return<>
        <section className="dashboard-container">
                <p>Complte Your Profile</p>
                <form method="" onSubmit={(e)=>saveDetails(e)}>
                    <label>Sex</label>
                    <input type="text" ref={age}/>
                    <label>Registration Number</label>
                    <input type="text" ref={gender}/>
                    <label>College</label>
                    <input type="text" ref={nationality}/>
                    <label>country</label>
                    <input type="text" ref={state}/>
                    <label>State</label>
                    <input type="text" ref={qualification}/>
                    <label>Address</label>
                    <textarea  ref={address}></textarea>
                    <button className="savedetails">Save</button>
                </form>
        </section>
    </>
}
export default CompleteReg;