import style from './Hero.module.scss'
import Button from '../Button/Button';

const Hero = () => {
 return (
  <div className={style.hero_container}>
   <div className={style.text_wrapper}>
         <h1 className={style.title}>Test assignment for front-end developer</h1>
         <p className={style.description}>
             What defines a good front-end developer is one that has skilled
             knowledge of HTML, CSS, JS with a vast understanding of User design
             thinking as they'll be building web interfaces with accessibility
             in mind. They should also be excited to learn, as the world of
             Front-End Development keeps evolving.
   </p>
   <Button type='button' title='Sign up' classes={style.button} />
   </div>
     </div>
 );
}

export default Hero;