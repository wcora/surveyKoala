import React from "react";
import './survey.scss'
const SurveyField = (props) => {
    // console.log(props)
    const { input, label, meta: {touched, error} } = props;
    return (
        <div className={`survey--form--field survey--form--field__${input.name}`}>
            <label> { label } </label>
            {input.name !== "body" ?
                <input {...input}/> :
                <textarea {...input}/>
            }
            <p>{ touched && error }</p>
        </div>
    )

}
export default SurveyField;
