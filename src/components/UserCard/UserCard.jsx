import style from './UserCard.module.scss'
import normalizedStr from '../../utils/normalizedStr';

const UserCard = ({ user }) => {

 return (
  <div className={style.card}>
         <img src={user.photo} alt="avatar" width="70px" height='70px' className={style.image} />  
         <p className={style.name}>{normalizedStr(user.name, 30)}</p>
         <p className={style.profession}>{normalizedStr(user.position, 30)}</p>
         <p>{normalizedStr(user.email, 30)}.</p>
         <p>{user.phone}</p>
     </div>
 );
}

export default UserCard;