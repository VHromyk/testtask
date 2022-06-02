import UserCard from "../UserCard/UserCard"
import Container from "../Container/Container"
import Button from "../Button/Button"
import SectionTitle from "../SectionTitle/SectionTitle"
import style from './UsersContainer.module.scss'

const UsersContainer= () => {
    return (
     <Container>
     <SectionTitle title="Working with GET request" />
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

export default UsersContainer;