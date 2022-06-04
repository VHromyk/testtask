import { useState, useEffect } from 'react';
import UserCard from "../UserCard/UserCard"
import Container from "../Container/Container"
import Button from "../Button/Button"
import SectionTitle from "../SectionTitle/SectionTitle"
import style from './UsersContainer.module.scss'
import ApiService from '../../service/api-service';
import Form from '../Form/Form';


const UsersContainer = () => {
    const [users, setUsers] = useState([]);
    const [countPages, setcountPages] = useState(null);
    const [showButton, setShowButton] = useState(true);
    
    const fetchUsers = () => {
        ApiService.getUsers().then((res) => {
            setcountPages(res.data.total_pages);
            setUsers(res.data.users);
        });
    }
    useEffect(() => fetchUsers, []);


    const showMoreHandler = (e) => {
        e.preventDefault();

        const currentPage = ApiService.getPage();
        if (countPages === currentPage + 1) {
            setShowButton(false)
        }
       
        ApiService.incrementPage();
        ApiService.getUsers().then((res) => setUsers([...res.data.users, ...users]))
    }

    return (
        <Container>
            <SectionTitle title="Working with GET request" />
            <div className={style.cards_section}>
            <ul className={style.cards_wrapper}>
                {users.map((user) => (
                    <li key={user.id} className={style.card}>
                        <UserCard  user={user} />
                    </li>
                ))}
            </ul>
            </div>
            {showButton && (
                <Button
                    type="submit"
                    title="Show more"
                    classes={style.button}
                    onClick={showMoreHandler}
                />
            )}
            <Form fetchUsers={fetchUsers}/>
        </Container>
    );
}

export default UsersContainer;