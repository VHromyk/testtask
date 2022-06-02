import { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';
import Button from '../Button/Button';
import style from './Form.module.scss';



const Form = () => {
    const [checkedEl, setCheckedEl] = useState();

    const radioButtons = [
        {
            id: 'FD',
            name: 'Frontend developer',
        },
        {
            id: 'BD',
            name: 'Backend developer',
        },
        {
            id: 'D',
            name: 'Designer',
        },
        {
            id: 'QA',
            name: 'QA',
        },
    ];

    return (
        <Container>
            <SectionTitle title="Working with POST request" />
            <form action="#" className={style.form}>
                <div class="modal-form-thumb">
                    <div class="modal-form-wrapper">
                        <input
                            type="text"
                            name="user-name"
                            className={style.input}
                            id="name"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div class="modal-form-wrapper">
                        <input
                            type="email"
                            name="user-email"
                            className={style.input}
                            placeholder="Your email"
                            id="mail"
                            required
                        />
                        <div class="modal-form-wrapper">
                            <input
                                type="tel"
                                name="user-phone"
                                className={style.input}
                                id="phone"
                                placeholder="Your phone"
                                required
                            />
                        </div>
                        <label for="phone" className={style.input_label}>
                            +38 (XXX) XXX - XX - XX
                        </label>
                    </div>
                    <div className={style.select_section}>
                        <h3 className={style.select_title}>Select your position</h3>
                        <ul className={style.select_container}>
                            {radioButtons.map((rb) => (
                                <li key={rb.id} className={style.select_element}>
                                    <input
                                        checked={rb.name === checkedEl ? 'checked' : ''}
                                        key={rb.name}
                                        type="radio"
                                        id={rb.id}
                                        name={rb.name}
                                        value={rb.id}
                                        onChange={() => setCheckedEl(rb.name)}
                                    />
                                    <label for={rb.id}>{rb.name}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button
                        type="submit"
                        title="Sign up"
                        classes={style.button}
                    />
                </div>
            </form>
        </Container>
    );
};

export default Form;
