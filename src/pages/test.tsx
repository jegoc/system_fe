// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import apiUrl from '../components/apiurl_MongoDB';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   cellphone: string;
// }

// const App: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch users
//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get<User[]>(`${apiUrl.url}users`);
//       setUsers(res.data);
//       setLoading(false);
//       console.log(res.data);
//     } catch (err) {
//       console.error("Failed to fetch users", err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Add a user
//   const addUser = async () => {
//     if (!name || !email) return;
//     try {
//       const res = await axios.post<User>(`${apiUrl.url}users`, { name, email });
//       setUsers([...users, res.data]);
//       setName("");
//       setEmail("");
//     } catch (err) {
//       console.error("Error adding user", err);
//     }
//   };

//   // Delete a user
//   const deleteUser = async (id: string) => {
//     try {
//       await axios.delete(`${apiUrl.url}users/${id}`);
//       setUsers(users.filter(user => user._id !== id));
//     } catch (err) {
//       console.error("Error deleting user", err);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//         <br/><br/><br/><br/><br/><br/>
//       <h1>👤 User Management</h1>

//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ marginRight: 10 }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ marginRight: 10 }}
//         />
//         <button onClick={addUser}>Add User</button>
//       </div>

//       {loading ? (
//         <p>Loading users...</p>
//       ) : users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user._id} style={{ marginBottom: "8px" }}>
//               <strong>{user.name}</strong> — {user.email} - {user.cellphone}
//               <button
//                 onClick={() => deleteUser(user._id)}
//                 style={{ marginLeft: "10px", color: "red" }}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found...</p>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import { Html5QrcodeScanner } from 'html5-qrcode';

// const QrScanner: React.FC = () => {
//   const [scannedCode, setScannedCode] = useState('');
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [useCamera, setUseCamera] = useState(false);

//   const handleHardwareScan = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const code = e.target.value;
//     if (code.trim() !== '') {
//       setScannedCode(code);
//       submitCode(code);
//       e.target.value = ''; // reset
//     }
//   };

//   const submitCode = async (code: string) => {
//     try {
//       await axios.post('http://localhost:3001/scan', { code });
//       alert('Code submitted: ' + code);
//     } catch (err) {
//       alert('Error submitting code');
//     }
//   };

//   const startCameraScan = () => {
//     const scanner = new Html5QrcodeScanner("reader", {
//       fps: 10,
//       qrbox: 250,
//     }, false);

//     scanner.render((decodedText) => {
//       setScannedCode(decodedText);
//       submitCode(decodedText);
//       scanner.clear().catch(console.error);
//     }, (errorMessage) => {
//       console.warn(errorMessage);
//     });
//   };

//   // 👇 Automatically start camera scan when useCamera is true
//   useEffect(() => {
//     if (useCamera) {
//       startCameraScan();
//     }
//   }, [useCamera]);

//   return (
//     <div>
//       <br/><br/><br/><br/><br/><br/>
//       <h2>QR/Barcode Scanner</h2>

//       <button onClick={() => setUseCamera(!useCamera)}>
//         {useCamera ? 'Use Hardware Scanner' : 'Use Camera'}
//       </button>

//       {!useCamera && (
//         <input
//           ref={inputRef}
//           type="text"
//           onChange={handleHardwareScan}
//           autoFocus
//           placeholder="Scan barcode here"
//         />
//       )}

//       {useCamera && (
//         <div id="reader" style={{ width: '300px' }} />
//       )}
//     </div>
//   );
// };

// export default QrScanner;







// import React, { useState } from 'react';
// import axios from 'axios';
// import apiUrl from '../components/apiurl';

// const VectorSearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState<any[]>([]);

//   const handleSearch = async () => {
//     const response = await axios.post(`${apiUrl.url}searchai`, { query });
//     setResults(response.data);
//   };

//   return (
//     <div>
//       <br/><br/><br/><br/><br/><br/>
//       <h1>🔍 Vector Search</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Ask something..."
//       />
//       <button onClick={handleSearch}>Search</button>

//       <ul>
//         {results.map((r, i) => (
//           <li key={i}>{r.metadata?.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VectorSearch;


import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, BarcodeFormat } from '@zxing/browser';
import { DecodeHintType } from '@zxing/library';
import axios from 'axios';
import { Toast, ToastContainer } from 'react-bootstrap';

const UniversalScanner: React.FC = () => {
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
    <div className="container text-center">
      <br/><br/><br/><br/><br/><br/>
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
        {/* <Toast show={showToast} bg="success">
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast> */}
        <Toast show={showToast}>
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
  );
};

export default UniversalScanner;
