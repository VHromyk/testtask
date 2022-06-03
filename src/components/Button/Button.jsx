import style from './Button.module.scss'
const Button = ({ type, title, onClick, classes }) => {
  const buttonClasses = [style.button];

  if (classes) {
    buttonClasses.push(classes)
  }

    return (
        <button
            type={type}
            className={buttonClasses.join(' ')}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
