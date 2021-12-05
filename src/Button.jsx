const Button = ({ title, disabled, onClick }) => {
    return (
        <button className="Button" onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
};

export default Button;
