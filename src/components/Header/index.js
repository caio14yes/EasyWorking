import React from 'react';

export default function Header(props){
    const style = {
        backgroundColor:'#585f6b',
        color:'#f4f4f4',
        width: '100%',
        textAlign:'center',
        lineHeight:'50px',
        marginTop:'-21px',
    }
    return (
        <header style={style}>
            <h1>{props.title}</h1>
        </header>
    );
}