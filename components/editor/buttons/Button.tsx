import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './Button.module.css'

interface ButtonProps extends Omit<InputHTMLAttributes<any>, 'onClick'>{
    text: string,
    disabled?: boolean,
    className?: string,
    onClick: () => void;
  }
  
  const editorButton = (props: ButtonProps) => {
    const rootClassName = cn(
      styles.root,
      props.className
    );

    return (
        <button
        type="submit"
        disabled={props.disabled}
        className={rootClassName}
        onClick={props.onClick}
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        </span>
        {props.text}
    </button>
    );
  };
  
  export default editorButton;