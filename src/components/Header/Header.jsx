import Container from '../Container/Container'
import style from './Header.module.scss'
import Logo from '../../images/svg/logo.svg'
import Button from '../Button/Button'

const Header = () => {
  return (
      <header className={style.header_wrapper}>
    <Container>
        <div className={style.header_container}>
          <a href="/" className={style.logo_link}>
            <img src={Logo} alt="logo" width="104px" height="26px" />
          </a>
                  <ul className={style.button_wrapper}>
            <Button type="button" title="Users" classes={style.first_button}/>
                      <Button type="button" title="Sign up" />
                  </ul>
              </div>
          </Container>
      </header>
  );
}


export default Header;