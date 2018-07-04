import React from 'react';

// Required 
export const required = value => (value ? undefined : "Required");

// Maximum value
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength40 = maxLength(40);

// Minimum value function
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
export const minValue0 = minValue(0);

export const noSpecialChars = value =>
    value && value.match(/^[_A-z0-9 ]*((-|\s)*[_A-z0-9])*$/g) ? undefined : "Text cannot contain special characters";

export const isValidPrice = value =>
    value && value.match("^[0-9]+[.][0-9]{2}$") ? undefined : "Must be a valid price"

export const isValidPercentage = value => {
    return value <= 100 && value >= 0 ? undefined : "Must be a valid Percentage" }


// Normaliser for using number only input
export const numOnly = (value) => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^(\d.)]/g, '')
    return onlyNums;
}

// Normaliser for discount
export const percentMax = (value, prevVal) => {
    if (!value) return value
    const onlyNums = Number.parseInt(value.replace(/[^(\d)]/g, ''), 10)

    // Handle NAN's
    if(Number.isNaN(prevVal)) prevVal = 0;
    if(Number.isNaN(onlyNums)) {return 0}

    // Limit of 100
    if(onlyNums > 100){
        if(typeof prevVal === "number") return prevVal;
        else return prevVal.replace(/[^(\d)]/g, '')
    } else return onlyNums;
}

export const renderField = ({
    prefix,
    input,
    value,
    label,
    type,
    className,
    placeholder,
    meta: { touched, error, warning }
}) => {
    if (touched && !error && !warning) { className += " form-field-success" }
    else if (touched && (error || warning)) { className += " form-field-failure" }

    if(prefix && input.value !== "") input.value = prefix + input.value; 
    return (
        <div>
            <label>{label}</label>
            <div className="form-fields-container">
                <input {...input} className={className} placeholder={placeholder} type={type} />
                <div className="form-fields-error-container">
                    {touched && ((error && <span className="form-fields-error-text"><i className="fas fa-exclamation-circle"></i> {error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        </div>
    )
};

export const renderTextArea = ({
    prefix,
    input,
    value,
    label,
    type,
    className,
    placeholder,
    meta: { touched, error, warning }
}) => {
    if (touched && !error && !warning) { className += " form-field-success" }
    else if (touched && (error || warning)) { className += " form-field-failure" }

    if(prefix && input.value !== "") input.value = prefix + input.value; 
    return (
        <div>
            <label>{label}</label>
            <div className="form-fields-container">
                <textarea {...input} className={className} placeholder={placeholder} type={type} />
                <div className="form-fields-error-container">
                    {touched && ((error && <span className="form-fields-error-text"><i className="fas fa-exclamation-circle"></i> {error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        </div>
    )
};