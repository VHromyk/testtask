import style from './SectionTitle.module.scss'

const SectionTitle = ({ title }) => {
 return (
  <h2 className={style.title}>{title}</h2>
 )
}

export default SectionTitle;
