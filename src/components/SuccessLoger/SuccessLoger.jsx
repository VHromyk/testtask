import SectionTitle from "../SectionTitle/SectionTitle";
import SuccessImage from '../../images/svg/success-image.svg';
import style from './SuccessLoger.module.scss'

const SuccessLoger = () => {
  return (
    <>
          <SectionTitle title="User successfully registered" />
          <img src={SuccessImage} alt="success" width="328px" height="290px" className={style.success_image}/>
    </>
  );
}

export default SuccessLoger;