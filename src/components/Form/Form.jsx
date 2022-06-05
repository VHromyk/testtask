import React, { useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import style from './Form.module.scss';
import ApiService from '../../service/api-service';
import TokenService from '../../service/token-service';
import normalizedStr from '../../utils/normalizedStr';
import RudioButton from '../RadioButton/RadioButton';
import TextField from '@mui/material/TextField';

const Form = ({ fetchUsers, logger }) => {
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

        TokenService.getToken().then((res) => TokenService.set(res.data.token));
    }, []);

    // Make button disable

    useEffect(() => {
        const disableBtn =
            !name || !email || !phone || !checkedEl || !uploadFile;

        setDisableBtn(disableBtn);
    }, [name, email, phone, checkedEl, uploadFile]);

    // Clear form after post request

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

        ApiService.addUsers(dataArray)
            .then((res) => {
                // After added user show first 6 users
                fetchUsers();

                // After added user show section that user was added
                logger();
            })
            .catch((err) => console.log(err))
            .finally(() => clearForm());
    };

    const imageHandler = (e) => {
        e.preventDefault();

        const filePath = e.target.files[0].name;

        const fileSize = e.target.files[0].size;

        console.log(e.target.files[0]);

        // Validate the input file

        const allowedExtensions = /(\.jpg|\.jpeg)$/i;

        // Check size of file

        if (fileSize > 5242880) {
            alert('File must be less than 5Mb');
            return false;
        }

        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type. Your file should be jpg/jpeg image');
            return false;
        }

        setUploadFile(e.target.files[0]);
    };
    
    // If I have true I will catch an error
    const errorTextInput = name.length >= 2 && name.length <= 60;
    const errorEmailInput = email.length >= 2 && email.length <= 60;

    return (
        <>
            <SectionTitle title="Working with POST request" />
            <form className={style.form} onSubmit={onSubmitForm}>
                <div className={style.input_container}>
                    <TextField
                        type="text"
                        required
                        fullWidth
                        value={name}
                        id="name"
                        label="Your name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                        error={name.length !== 0 && !errorTextInput}
                        inputProps={{
                            minLength: 2,
                            maxLength: 60,
                        }}
                    />
                    <TextField
                        required
                        fullWidth
                        value={email}
                        id="email"
                        label="Your email"
                        onChange={(e) => setEmail(e.target.value)}
                        error={email.length !== 0 && !errorEmailInput}
                        inputProps={{
                            minLength: 2,
                            maxLength: 60,
                            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
                        }}
                    />
                    <div>
                        <TextField
                            required
                            fullWidth
                            value={phone}
                            id="phone"
                            label="Your phone"
                            onChange={(e) => setPhone(e.target.value)}
                            inputProps={{
                                pattern: '[+]{0,1}380([0-9]{9})$',
                            }}
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
