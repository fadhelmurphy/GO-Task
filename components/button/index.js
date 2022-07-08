import PropTypes from "prop-types";
export default function customButton({type, active, children, onClick, margin, padding, className}) {
    return (
        <>
        <button type={type} className={`customButton ${className}`} onClick={(val)=>onClick(val)}>{children}</button>
        <style jsx>
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
customButton.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.any,
    margin: PropTypes.string,
    active: PropTypes.bool,
    type: PropTypes.any,
  };

  customButton.defaultProps = {
    onClick: () => false,
    children: null,
    margin: "10px 10px 10px 0",
    padding: "10px",
    active: false,
    type: false,
  };