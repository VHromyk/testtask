import React, { useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import style from './Form.module.scss';
import ApiService from '../../service/api-service';
import TokenService from '../../service/token-service';
import normalizedStr from '../../utils/normalizedStr';
import RudioButton from '../RadioButton/RadioButton';

const Form = ({fetchUsers, logger}) => {
    const [positions, setPositions] = useState([]);
    const [checkedEl, setCheckedEl] = useState(1);
    const [disableBtn, setDisableBtn] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [uploadFile, setUploadFile] = useState(null);


    useEffect(() => {
        ApiService.getPositions().then((res) =>
            setPositions(res.data.positions)
        );
    }, []);

    useEffect(() => {
        const disableBtn =
            !name || !email || !phone || !checkedEl || !uploadFile;

        setDisableBtn(disableBtn);
    }, [name, email, phone, checkedEl, uploadFile]);

    const clearForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setUploadFile('');
        setCheckedEl(1);
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        const dataArray = new FormData();
        dataArray.append('position_id', checkedEl);
        dataArray.append('name', name);
        dataArray.append('email', email);
        dataArray.append('phone', phone);
        dataArray.append('photo', uploadFile);

        const token = await TokenService.getToken().then(
            (res) => res.data.token
        );

        TokenService.set(token);

        ApiService.addUsers(dataArray).then(res => {
            fetchUsers();

            logger();

        }).catch((err) => console.log(err))
            .finally(() => clearForm());
    };


    const imageHandler = (e) => {
        e.preventDefault();

        const filePath = e.target.files[0].name;

        const fileSize = e.target.files[0].size;

        // Validate the input file

        const allowedExtensions = /(\.jpg|\.jpeg)$/i;

        if (fileSize > 5242880) {
            alert('File must be less than 5Mb');
            return false;
        }

        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type');
            return false;
        }
            
            setUploadFile(e.target.files[0]);
    };

    return (
        <>
            <SectionTitle title="Working with POST request" />
            <form className={style.form} onSubmit={onSubmitForm}>
                <div>
                    <input
                        type="text"
                        className={style.input}
                        value={name}
                        placeholder="Your name"
                        required
                        minLength={2}
                        maxLength={60}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        className={style.input}
                        placeholder="Your email"
                        title={email}
                        value={email}
                        required
                        minLength={2}
                        maxLength={100}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        <input
                            type="tel"
                            className={style.input}
                            value={phone}
                            id="phone"
                            placeholder="Your phone"
                            required
                            pattern="[\+]{0,1}380([0-9]{9})$"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <label htmlFor="phone" className={style.input_label}>
                        +38 (XXX) XXX - XX - XX
                    </label>

                    <div className={style.select_section}>
                        <h3 className={style.select_title}>
                            Select your position
                        </h3>
                        <ul className={style.select_container}>
                            {positions.map((el) => (
                                <RudioButton
                                    key={el.id}
                                    el={el}
                                    onCheckHandler={setCheckedEl}
                                    checked={checkedEl}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className={style.select_photo_container}>
                        <input
                            className={style.visually_hidden}
                            type="file"
                            id="photo"
                            required
                            onChange={imageHandler}
                        />
                        <label htmlFor="photo">
                            <div className={style.upload_container}>
                                <span className={style.upload_button}>
                                    Upload
                                </span>
                                <span className={style.field}>
                                    {uploadFile
                                        ? normalizedStr(uploadFile.name, 33)
                                        : 'Upload your photo'}
                                </span>
                            </div>
                        </label>
                    </div>
                    <Button
                        type="submit"
                        title="Sign up"
                        classes={disableBtn ? style.disable : style.enable}
                    />
                </div>
            </form>
        </>
    );
};

export default Form;
