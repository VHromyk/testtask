import style from './Button.module.scss'
const Button = ({ type, title, classes }) => {
  const buttonClasses = [style.button];

  if (classes) {
    buttonClasses.push(classes)
  }

    return (
      <button type={type} className={buttonClasses.join(' ')}>{title}</button>
    );
};

export default Button;
