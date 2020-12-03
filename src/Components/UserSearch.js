import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Typography} from "@material-ui/core";
import axios from "axios";



export default function UserSearch({getId}) {
    const [userName, setUserName] = useState("unKnown");
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = async(data) => {

        if (!parseInt(data.user_id)) {
            console.log("Invalid Input");
        } else {
            const result = await axios(
                `https://fitbit-dat.herokuapp.com/user/${data.user_id}`,
            );
            setUserName(result.data.name);
            console.log(userName);
            getId(data.user_id);
        }
    }

    const checkVal = (userName) => {
        return <h1>Hello {userName}</h1>
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* include validation with required or other standard HTML validation rules */}
                <input name="user_id" ref={register({required: true})}/>
                {/* errors will return when field validation fails  */}
                {errors.user_id && <span>This field is required</span>}

                <input type="submit"/>
            </form>
            {userName=='unKnown'? <h1></h1> : <h1>Hello {userName}</h1>}
        </>
    )
        ;
}