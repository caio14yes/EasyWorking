import React from 'react';

export default function Textarea(props){
    return (
        <textarea
            id={props.id}
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            cols={props.cols}
            rows={props.rows}
        >
        </textarea>
    );
}
// cols="30" rows="10"