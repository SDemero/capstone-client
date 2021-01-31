import { useAuth } from "../../context/AuthContext";
import React, {Component, useState} from 'react';
import axios from 'axios'

export default function Update(props){
    const {currentUser} = useAuth();
    console.log("email here "+currentUser.email+" "+props.height);
        axios.put(`https://ttp-teamhotel-backend.herokuapp.com/api/user/${currentUser.email}`,
            {height: props.height,
            weight: props.weight,
            BMI: props.userBMI.toFixed(1)
            })
    
    return null;
}