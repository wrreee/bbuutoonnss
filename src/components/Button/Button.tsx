import * as React from "react";
import * as classNames from "classnames";
import "./Button.css";

export interface ButtonEventData {
    value: any,
    name?: string,
    e?: any,
}

export interface ButtonProps {
    onClick?(data?: ButtonEventData)

    onMouseDown?(data?: ButtonEventData)

    onMouseUp?(data?: ButtonEventData)

    value?: any
    name?: string

    className?: string
    children?: React.ReactNode,
    disabled?: boolean
    width?: number
    height?: number

    ref?: React.RefObject<any>
}

export const Button: React.FC<ButtonProps> = ({
    ref,
    children,
    height,
    onClick,
    onMouseDown,
    onMouseUp,
    disabled,
    width,
    className,
    value,
    name}) => {
    return (
        <button
            ref={ref}
            className={classNames("button", className)}
            onClick={e => !disabled && onClick && onClick({e, value, name})}
            onMouseUp={e => !disabled && onMouseUp && onMouseUp({e, value, name})}
            onMouseDown={e => !disabled && onMouseDown && onMouseDown({e, value, name})}
            style={{width, height}}
            disabled={disabled}>
            {children}
        </button>
    );
};