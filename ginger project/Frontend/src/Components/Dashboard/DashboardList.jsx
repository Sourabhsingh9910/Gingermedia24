import Viewprofile from "./Viewprofile";
import EditProfile from "./EditProfile";
import { useState } from "react";
const DashboardList=()=>{
    const [vf,setVf]=useState("");
    const vprofile=(v)=>{
        setVf(v);
    }
    return<>
        <div className="listcontainer">
            <div onClick={()=>vprofile("viewprofile")}>View</div>
            <div onClick={()=>vprofile("editprofile")}>Edit</div>
        </div>
        {vf==="viewprofile"&&<Viewprofile prop={vprofile} />}
        {vf==="editprofile"&&<EditProfile prop={vprofile} />}


    </>
}
export default DashboardList;