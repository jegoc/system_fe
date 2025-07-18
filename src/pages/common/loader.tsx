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
import { clearError } from "./redux/feedbackActions";
import type { AppDispatch } from '../../redux/store';

export const FeedbackSuccess = () => {
    const redirectPath = useSelector((state: RootState) => state.FeedbackReducer.redirectPath);
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
                    <h4>Feedback recorded successfully!</h4>
                    <p>Thank you so much for all your feedback.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export const FeedbackFailed = () => {
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
                    <h4>Feedback Failed!</h4>
                    <p>You have entered invalid e-mail!</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const ContactSuccess = () => {
    const redirectPath = useSelector((state: RootState) => state.ContactReducer.redirectPath);
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
                    <h4>Contact Message Successfully!</h4>
                    <p>Thank you so much for contacting us.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export const ContactFailed = () => {
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
                    <h4>Contact Message Failed!</h4>
                    <p>Message record failed, Please try again!</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} ref={closeButtonRef as React.RefObject<HTMLButtonElement>}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

