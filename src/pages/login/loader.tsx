import React, { useState, useEffect, useRef }  from 'react';
import {
    Modal,
    Button
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import { PiWarningDuotone } from "react-icons/pi";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { clearError } from "./redux/loginActions";
import type { AppDispatch } from '../../redux/store';

export const LoginFailed = () => {
    const closeButtonRef = useRef<HTMLButtonElement | null>(null); 
    const [show, setShow] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    const handleClose = () => {
        dispatch(clearError()); // Clear error from Redux state
        setShow(false);
    }

    useEffect(() => {
        if (show && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title>
                    <div className='text-danger'>
                        <PiWarningDuotone size={100}/>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Login Failed</h4>
                    <p>You have entered invalid Email or Password!</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const ForgotResetSuccess = () => {
    const redirectPath = useSelector((state: RootState) => state.LoginReducer.redirectPath);
    const closeButtonRef = useRef<HTMLButtonElement | null>(null); 
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        if (redirectPath) {
            navigate(redirectPath);
            window.location.reload();
          }
    }
    useEffect(() => {
        if (show && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [show]);
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title>
                    <div className='text-success'>
                        <PiCheckCircleDuotone size={100}/>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Password Reset!</h4>
                    <p>Password reset successful. <br/>Please kindly check your email for your temporary password.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export const ForgotResetFailed = () => {
    const closeButtonRef = useRef<HTMLButtonElement | null>(null); 
    const [show, setShow] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    const handleClose = () => {
        dispatch(clearError()); // Clear error from Redux state
        setShow(false);
    }
    
    useEffect(() => {
        if (show && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title>
                    <div className='text-danger'>
                        <PiWarningDuotone size={100}/>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Password Reset Failed!</h4>
                    <p>You have entered invalid e-mail or PIN!</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const SignUpFailed = () => {
    const closeButtonRef = useRef<HTMLButtonElement | null>(null); 
    const [show, setShow] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    const handleClose = () => {
        dispatch(clearError()); // Clear error from Redux state
        setShow(false);
    }

    useEffect(() => {
        if (show && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title>
                    <div className='text-danger'>
                        <PiWarningDuotone size={100}/>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Sign Up Failed</h4>
                    <p>You have entered invalid data! Please try again.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const SignUpSuccess = () => {
    const redirectPath = useSelector((state: RootState) => state.SignUpReducer.redirectPath);
    const closeButtonRef = useRef<HTMLButtonElement | null>(null); 
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        if (redirectPath) {
            navigate(redirectPath);
            window.location.reload();
          }
    }
    useEffect(() => {
        if (show && closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, [show]);
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title>
                    <div className='text-success'>
                        <PiCheckCircleDuotone size={100}/>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Thank you for signing up!</h4>
                    <p>Please verify your email address to complete the registration process.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                {/* <Button variant="secondary" onClick={handleClose} >Yes</Button> */}
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


