import style from './UserCard.module.scss'
import Man from '../../images/png/field.png'

const UserCard = () => {
 return (
  <li className={style.card}>
         <img src={Man} alt="img" width="70px" height='70px' className={style.image} />  
         <p className={style.name}>Salvador Stewart Flynn Thomas Salva...</p>
         <p className={style.profession}>Leading specialist of the department o...</p>
         <p>JeromeKlarkaJeromeKlarka19233623...</p>
         <p>+38 (098) 278 76 24</p>
     </li>
 );
}

export default UserCard;