import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, BarcodeFormat } from '@zxing/browser';
import { DecodeHintType } from '@zxing/library';
import axios from 'axios';
import Sidebar from '../common/sidebar';
import {
    Container,
    Row,
    Col,
    Toast, ToastContainer 
  } from 'react-bootstrap';

const UniversalScanner: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
      useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [scanned, setScanned] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [useCamera, setUseCamera] = useState(true);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const scannerControl = useRef<Awaited<ReturnType<BrowserMultiFormatReader['decodeFromVideoDevice']>> | null>(null);
  const codeReader = useRef<BrowserMultiFormatReader | null>(null);

  useEffect(() => {
    if (useCamera) {
      startCameraScan();
    } else {
      stopCameraScan();
    }

    return () => {
      stopCameraScan();
    };
  }, [useCamera]);

  const startCameraScan = async () => {
    if (isScanning) return;

    const hints = new Map();
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [
      BarcodeFormat.QR_CODE,
      BarcodeFormat.CODE_128,
      BarcodeFormat.CODE_39,
      BarcodeFormat.EAN_13,
      BarcodeFormat.EAN_8,
      BarcodeFormat.UPC_A,
      BarcodeFormat.UPC_E,
      BarcodeFormat.ITF,
    ]);

    codeReader.current = new BrowserMultiFormatReader(hints);

    try {
      const devices = await BrowserMultiFormatReader.listVideoInputDevices();
      if (devices.length === 0) throw new Error('No camera found');

      const selectedDeviceId = devices[0].deviceId;
      setIsScanning(true);

      const control = await codeReader.current.decodeFromVideoDevice(
        selectedDeviceId,
        videoRef.current!,
        async (result, err, _controls) => {
          if (result) {
            const text = result.getText();
            setScanned(text);
            await submitCode(text);
            await stopCameraScan(); // Stop current scan
            setTimeout(() => {
              startCameraScan(); // Restart after toast
            }, 100); // slight delay to release camera
          }
        }
      );

      scannerControl.current = control;
    } catch (error) {
      console.error('Error starting scan:', error);
    }
  };

  const stopCameraScan = async () => {
    try {
      await scannerControl.current?.stop();

      const videoElem = videoRef.current;
      if (videoElem && videoElem.srcObject) {
        const stream = videoElem.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoElem.srcObject = null;
      }

      setIsScanning(false);
    } catch (e) {
      console.warn('Failed to stop scanner:', e);
    }
  };

  const submitCode = async (code: string) => {
    try {
      await axios.post('http://localhost:8888/express/scan', { code });
      setToastMessage(`✅ Code submitted: ${code}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // hide after 3 sec
    } catch (err) {
      setToastMessage('❌ Error submitting code');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleHardwareScan = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.trim();
    if (code !== '') {
      setScanned(code);
      submitCode(code);
      e.target.value = '';
    }
  };

  return (
    <Container fluid data-bs-theme="dark">
        <Row>
            <Col>
                <Sidebar />
            </Col>
            <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}>
                <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}></div>
                    <div className="container text-center">
                    <h2>QR & Barcode Scanner</h2>

                    <button
                        className="btn btn-primary my-3"
                        onClick={() => setUseCamera((prev) => !prev)}
                    >
                        {useCamera ? 'Use Hardware Scanner' : 'Use Camera Scanner'}
                    </button><br/>

                    {useCamera ? (
                        <video
                        ref={videoRef}
                        style={{ width: '100%', maxWidth: '400px', border: '1px solid #ccc' }}
                        />
                    ) : (
                        <input
                        ref={inputRef}
                        type="text"
                        onChange={handleHardwareScan}
                        autoFocus
                        placeholder="Scan with hardware scanner"
                        className="form-control"
                        style={{ maxWidth: 400, margin: '0 auto' }}
                        />
                    )}

                    {scanned && (
                        <p className="mt-3">
                        Last Scan: <strong>{scanned}</strong>
                        </p>
                    )}

                    {/* Toast notification */}
                    <ToastContainer position="top-center" className="mt-3">
                        <Toast show={showToast} bg="light">
                            <Toast.Header closeButton={false}>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Scanned Code</strong>
                            <small>just now</small>
                            </Toast.Header>
                            <Toast.Body>{toastMessage}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default UniversalScanner;