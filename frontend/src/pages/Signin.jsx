import { Heading } from "../components/Heading"
import { InputBox } from "../components/Inputbox"
import { SubHeading } from "../components/SubHeading"
import {Button} from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
export const Signin=()=>{

    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

   
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"}/>
                    <InputBox label={"Email"} placeholder="abc@gmail.com" 
                    onChange={(e)=>{
                        setUserName(e.target.value)
                    }}
                    
                    />
                    <InputBox placeholder="123456" label={"Password"} 
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    <div className="pt-4">
                        <Button 
                        onClick={async()=>{
                            const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                                username,
                                password
                            });
                            localStorage.setItem("token",response.data.token)
                            navigate("/dashboard")
                        }}
                        label={"Sign in"}
                        />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      
                </div>

            </div>
        </div>
    )
}