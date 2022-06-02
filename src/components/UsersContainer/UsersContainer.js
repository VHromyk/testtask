import UserCard from "../UserCard/UserCard"
import Container from "../Container/Container"
import Button from "../Button/Button"
import style from './UsersContainer.module.scss'

const Users = () => {
 return (
  <Container>
             <h2 className={style.title}>Working with GET request</h2>
             <ul className={style.cards_wrapper}>
                 <UserCard />
                 <UserCard />
                 <UserCard />
                 <UserCard />
                 <UserCard />
                 <UserCard />
             </ul>
             <Button type="submit" title="Show more" classes={style.button} />
     </Container>
 );
}

export default Users;