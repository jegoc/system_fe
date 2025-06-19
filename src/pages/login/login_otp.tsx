import OtpInput from 'react-otp-input';
import '../../css/otp.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../components/apiurl';
import {
    Modal,
    Button
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageVariable, setLocalStorageVariable } from '../../components/localStorage';
import { encryptPath } from '../../components/encryptor';

export const LoginOtp = () => {
    const encryptedDashboardPath = encryptPath('/user_dashboard');

    const [{ otp, numInputs, placeholder, inputType }, setConfig] = React.useState({
        otp: '',
        numInputs: 6,
        placeholder: '',
        inputType: 'number' as const,
    });

    const handleOTPChange = (otp: string) => {
        setConfig((prevConfig) => ({ ...prevConfig, otp }));
    };

    const clearOtp = () => {
        setConfig((prevConfig) => ({ ...prevConfig, otp: '' }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        verifyOtp();
    };

    // Retrieve necessary values from localStorage
    const email = getLocalStorageVariable<string>('loginEmail');
    const tempuserId = getLocalStorageVariable<string>('tempuserId');
    const tempuserAuth = "client";
    // const tempavatar = getLocalStorageVariable<string>('tempavatar');
    // const temptoken = getLocalStorageVariable<string>('temptoken');
    // const temploginDate = getLocalStorageVariable<string>('temploginDate');

    const verifyOtp = async () => {
        try {
            const response = await axios.post(`${apiUrl.url}otp/verify-otp`, { email, otp });
            if (response.data.success) {
                navigate(`/${encryptedDashboardPath}`);
                window.location.reload();
                setLocalStorageVariable('loginEmail', email);
                setLocalStorageVariable('userId', tempuserId);

                    // ***** User Tracking Record *****
                    const recordUserAccess = async () => {
                        try {
                            // Get User IP and Location Data
                            const geoResponse = await axios.get("https://ipapi.co/json/");
                            const { ip, city, region, country, latitude, longitude } = geoResponse.data;
                            const user_id = tempuserId;
                            const user_auth = tempuserAuth;
                            const page = 'user';

                            // Get Device Information
                            const userAgent = navigator.userAgent;
                            const device = /mobile/i.test(userAgent) ? "Mobile" : "Desktop";
                            // const localTime = new Date().toLocaleString();

                            // Format local time to MySQL-compatible format
                            const localTime = new Date().toISOString().slice(0, 19).replace("T", " ");

                            // Prepare the payload
                            const payload = {
                                user_id,
                                user_auth,
                                page,
                                ip,
                                city,
                                region,
                                country,
                                latitude,
                                longitude,
                                device,
                                localTime,
                            };

                            // Send the data to your backend
                            await axios.post(`${apiUrl.url}user_tracking`, payload);
                        } catch (error) {
                            console.error("Error tracking user data:", error);
                        }
                    };
                    recordUserAccess();
                // ***** User Tracking Record End *****

            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Error verifying OTP');
        }
    };

    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [countdown, setCountdown] = useState(180); // 300 seconds for 5 minutes

    useEffect(() => {
        if (countdown > 0) {
            const timerId = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(timerId); // Clean up the timer on unmount
        } else {
            setShow(false); // Close the modal when countdown reaches 0
        }
    }, [countdown]);

    // Format countdown as MM:SS
    const formatCountdown = () => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <Modal show={show} centered onHide={() => setShow(false)}>
            <Modal.Body className="d-flex justify-content-center">
                <div className="view">
                    <div className="card1">
                        <form onSubmit={handleSubmit}>
                            <p>Enter OTP code</p>
                            Please check your email account for your OTP.<br/>
                            <p><strong>Time remaining: {formatCountdown()}</strong></p>
                            <div className="margin-top--small">
                                <OtpInput
                                    inputStyle="inputStyle"
                                    numInputs={numInputs}
                                    onChange={handleOTPChange}
                                    value={otp}
                                    placeholder={placeholder}
                                    inputType={inputType}
                                    renderInput={(props) => <input {...props} />}
                                    shouldAutoFocus
                                />
                            </div>
                            <div className="btn-row">
                                <Button variant='primary' className="bg-primary btn btn-block rounded-pill mt-3" type="submit" disabled={otp.length < numInputs}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};
