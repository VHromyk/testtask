import style from './UserCard.module.scss';
import normalizedStr from '../../utils/normalizedStr';

const UserCard = ({ user }) => {
    return (
        <div className={style.card}>
            <img
                src={user.photo}
                alt="avatar"
                width="70px"
                height="70px"
                className={style.card_image}
            />
            <p className={style.card_element}>{normalizedStr(user.name, 34)}</p>
            <p className={style.card_element}>
                {normalizedStr(user.position, 34)}
            </p>
            <p>{normalizedStr(user.email, 34)}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserCard;
