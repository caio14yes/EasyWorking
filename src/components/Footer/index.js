import React from 'react';

export default function Footer(props){
    const style = {
        backgroundColor:'#585f6b',
        color:'#f4f4f4',
        width: '100%',
        height: '50px',
    }
    return (
        <footer style={style}>{props.text}</footer>
    );
}