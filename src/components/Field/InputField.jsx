import { Field } from 'formik'
import React from 'react'

const InputField = ({ onBlur, onChange, value, placeholder, error, name, errorMsg, type, label = "" }) => {
    return (
        <div className='relative flex flex-col'>
            <label className='text-sm text-red-800 capitalize' htmlFor={name}>{label}</label>
            <Field
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`border outline-none text-sm focus:border-opacity-0 focus:ring-2 focus:ring-blue-700 focus:border-transparent w-full py-2 px-3 ${error ? "border-none ring-2 ring-red-700" : "border-gray-400"}  rounded`}
                placeholder={placeholder}
                name={name}
            />

            {error ? (
                <div className='text-xs mt-1.5 text-red-700'>{errorMsg}</div>
            ) : null}
        </div>

    )
}

export default InputField