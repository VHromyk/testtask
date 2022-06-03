import style from './UserCard.module.scss'

const UserCard = ({ user }) => {

    const cutText = (str) => {
        if (str.length > 30) {
            return str.slice(0, 27) +'...';
        }
        return str;
    }
    
 return (
  <li className={style.card} key={user.id}>
         <img src={user.photo} alt="img" width="70px" height='70px' className={style.image} />  
         <p className={style.name}>{cutText(user.name)}</p>
         <p className={style.profession}>{cutText(user.position)}</p>
         <p>{cutText(user.email)}.</p>
         <p>{user.phone}</p>
     </li>
 );
}

export default UserCard;