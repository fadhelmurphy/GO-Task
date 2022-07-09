import React from "react";
import PropTypes from "prop-types";
export default function Button({type, active, children, onClick, margin, padding, className}) {
    return (
        <>
        <button type={type.toString()} className={`customButton ${className}`} onClick={(val)=>onClick(val)}>{children}</button>
        <style jsx="true">
            {`
                .customButton {
                    color: ${active ? "#4CAF50" : "#999"};
                    border: 1px solid ${active ? "#4CAF50" : "#999"};
                    background: #fff;
                    padding: ${padding};
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 20px;
                    cursor: pointer;
                    margin: ${margin}
                }
            `}
        </style>
        </>
    )
}
Button.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.any,
    margin: PropTypes.string,
    active: PropTypes.bool,
    type: PropTypes.any,
    children: PropTypes.any,
  };

  Button.defaultProps = {
    onClick: () => false,
    children: null,
    margin: "10px 10px 10px 0",
    padding: "10px",
    active: false,
    type: false,
  };