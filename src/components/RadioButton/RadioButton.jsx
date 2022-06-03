import style from './RadioButton.module.scss'

const RudioButton = ({ el, checked, onCheckHandler }) => {
  return (
      <li className={style.select_element}>
          <input
              checked={el.id === checked ? 'checked' : ''}
              key={el.name}
              type="radio"
              id={el.id}
              name={el.name}
              value={el.id}
              onChange={() => onCheckHandler(el.id)}
          />
          <label className={style.radio_label} htmlFor={el.id}>{el.name}</label>
      </li>
  );
}

export default RudioButton;