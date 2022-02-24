import React, { useState, useEffect } from 'react';

export default function Rate() {
    
    function getRate(){
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => response.json())
        .then(data => console.log(data));
    }
    
    useEffect(()=>{
        getRate();
    });

    return (
        <div>Rate</div>
    )
}
