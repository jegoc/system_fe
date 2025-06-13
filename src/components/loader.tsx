import React, { useState, useEffect, useRef }  from 'react';
import {
    Modal,
    Spinner,
    Button,
    Image
} from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { RootState } from '../redux/reducers';
import { PiWarningDuotone } from "react-icons/pi";
import { PiCheckCircleDuotone } from "react-icons/pi";
import loading from '../images/logo.png';
import logo from '../images/logo.png';

export const LoadingPage = () => {
    return (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999, // Higher z-index for modal-like effect
          }}
        >
          <div style={{ position: 'relative', width: '100px', height: '100px' }}>
            {/* Image in the center */}
            <img
              src={loading}
              alt="center-image"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                width: '80px',
                height: '80px',
              }}
            />
      
            {/* Custom Spinner with two opposing segments */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '5px solid transparent',
                borderTop: '5px solid rgb(0,173,239)',
                borderBottom: '5px solid rgb(56,113,193)',
                animation: 'spin 1s linear infinite',
              }}
            />
          </div>
      
          {/* CSS for animation */}
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      );
}

