import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import PropTypes from 'prop-types';
import { sendEmail } from "../helpers/sendEmail";

export const SendEmail = ({user, products}) => {

    const [emailValue, setEmailValue] = useState('');

    const onInputChange = ({target}) => {
        setEmailValue(target.value);
    };

    const notifySuccess = () => toast.success(`📨 Email sent with recommendation for the user ${user}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    const notifyError = (error) => toast.error(`${error}`);

    const onSubmit = async (event) => {
        event.preventDefault();
        if(emailValue.trim().length <= 1) return;
        try {
            const {statusCode, body } = await sendEmail(emailValue, products);
            if(statusCode >= 300) {
                const {error} = JSON.parse(body);
                notifyError(error);
                return;
            }
            notifySuccess();
            setEmailValue('');  
        } catch (error) {
            notifyError(error);
        }
    };

    return (
        <>
            <h3>Sending email with recomendations</h3>
            <form onSubmit={onSubmit} aria-label="form" >
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={emailValue}
                    onChange={onInputChange} 
                    required />
            </form>
            <ToastContainer />
        </>
       
    )
}

SendEmail.propTypes = {
    user: PropTypes.string.isRequired, 
    products: PropTypes.array.isRequired
}