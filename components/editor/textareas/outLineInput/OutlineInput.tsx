import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './OutlineInput.module.css'

interface inputAreaProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  placeholderText: string,
  value?: string,
  onChange: (value: string) => void,
  className?: string
}

const outlineInput = (props: inputAreaProps) => {
  const rootClassName = cn(
    styles.root,
    props.className
  );

  const handleOnChange = (value: string) => {
    if (props.onChange) {
      props.onChange(value);
    }
    return null;
  };

  return (
    <textarea
    value={props.value}
    onChange={(e) => handleOnChange(e.target.value)}
    className={`${rootClassName} border-slate`}
    placeholder={`${props.placeholderText}`}>
    </textarea>
  );
};

export default outlineInput;