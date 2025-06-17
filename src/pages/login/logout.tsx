import React, { useEffect } from 'react';
import { 
    Col,
} from 'react-bootstrap';
// import { setLocalStorageVariable } from '../../components/localStorage';
import { useNavigate } from 'react-router-dom';
import { encryptPath } from '../../components/encryptor';

const Logout = () =>{
    const loginPath = encryptPath('/login');

    // Clear all items from localStorage
    localStorage.clear();

    // Clear all items from sessionStorage
    sessionStorage.clear();

    const navigate = useNavigate();

    useEffect(() => {
        // if (!userId && userAuth!='client') {
            navigate(`/login`); 
            window.location.reload();
        // }
    }, [navigate]);
    return (
        <div>
            <Col className='text-center text-secondary p-5'>
                Developed and Maintained by : <br/>
                &copy; Pears Portal
            </Col>
        </div>
    )
}

export default Logout;