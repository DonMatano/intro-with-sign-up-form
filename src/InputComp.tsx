import React from 'react';
import {ReactComponent as ErrorIcon} from './images/icon-error.svg'

type InputProps = {
  placeholder?: string;
  type?: string;
  isInvalid?: boolean,
  errorMessage?: string,
  value?: string,
  handleChange: Function,
}

const InputComp = ({placeholder, type = 'text', isInvalid = false, errorMessage = '', value = '', handleChange}: InputProps) => {
  const errorClasses = "border-2 border-primary-red text-primary-red"
  const normalClasses = "border border-neutral-grey text-neutral-dark-blue"
  const classesToAdd = isInvalid ? errorClasses : normalClasses
  return  (
    <div className="flex w-4/5 flex-col">
      <div 
        tabIndex={0}
        className={`${classesToAdd} outline-none focus:ring-1 flex justify-between w-full focus:ring-accent-blue rounded-md py-3 px-1  mt-4`}>
        <input className={`outline-none  placeholder-neutral-gray font-bold text-sm leading-6 flex-grow mr-2`}
        tabIndex={-1}
        placeholder={placeholder}
        type={type}
        value={value}
        required
        onChange={(event) => handleChange(event.target.value)}
        />
        { isInvalid && <ErrorIcon/> }
      </div>
      {
        isInvalid && <p className="text-right text-primary-red font-medium italic text-xs">{errorMessage}</p>
      }
    </div>
  )
}

export default InputComp;
