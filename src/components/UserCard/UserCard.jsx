import style from './UserCard.module.scss';
import normalizedStr from '../../utils/normalizedStr';
import photoCover from '../../images/svg/photo-cover.svg';

const UserCard = ({ user }) => {
    const { name, email, phone, position, photo } = user;

    return (
        <div className={style.card}>
            <img
                src={photo}
                alt="avatar"
                width="70px"
                height="70px"
                className={style.card_image}
                // Check unloaded images
                onError={(errorImg) => {
                    errorImg.currentTarget.onerror = null; // prevents looping
                    errorImg.currentTarget.src = photoCover;
                }}
            />
            <p className={style.card_element}>{normalizedStr(name, 34)}</p>
            <p className={style.card_element}>{normalizedStr(position, 34)}</p>
            <p>{normalizedStr(email, 34)}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserCard;
