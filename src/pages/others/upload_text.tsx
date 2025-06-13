import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../components/apiurl';
import { 
  Container, 
  // Card,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Sidebar  from '../common/sidebar';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Upload_Text: React.FC = () =>{
    const [fileList, setFileList] = useState([]);
  const [selectedFileContent, setSelectedFileContent] = useState('');

  useEffect(() => {
    fetchFileList();
  }, []);

  const fetchFileList = async () => {
    try {
      const response = await axios.get(`${apiUrl.url}textfile/file-list`);
      setFileList(response.data);
    } catch (error) {
      console.error('Error fetching file list:', error);
    }
  };

  const handleFileClick = async (fileName:any) => {
    try {
      const response = await axios.get(`${apiUrl.url}textfile/file-content/${fileName}`);
      setSelectedFileContent(response.data);
    } catch (error) {
      console.error('Error fetching file content:', error);
    }
  };


  // Delete files
  const handleDelete = async (fileName:any) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${fileName}?`);

      if (confirmed) {
        try {
          await axios.delete(`${apiUrl.url}textfile/delete-file/${fileName}`);
          console.log('File deleted successfully');
          // Update the file list after deletion
          fetchFileList();
        } catch (error) {
          console.error('Error deleting file:', error);
        }
      }
  };

  // File upload start here
const [selectedFile, setSelectedFile] = useState<File | null>(null); // Adjust the state initialization

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files) {
    setSelectedFile(event.target.files[0]);
  }
};

const handleUpload = async () => {
  if (!selectedFile) {
    console.error('No file selected');
    return;
  }

  const formData = new FormData();
  formData.append('file', selectedFile);

  try {
    await axios.post(`${apiUrl.url}upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('File uploaded successfully');
    alert('File uploaded successfully');
    fetchFileList();
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

  // Copy starts here
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = selectedFileContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid className='' data-bs-theme="dark">
        <Row>
          <Col >      
            <Sidebar  />
          </Col>
          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}
            <div style={{width:"400px"}}></div>
            <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'} text-light`}> {/* Conditional rendering for ms-4 class */}
                <div className='mb-3'>
                    {/* <input type="file" accept=".txt" onChange={handleFileChange} /> */}
                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label>Select text file to upload</Form.Label>
                        <Form.Control type="file" accept=".txt" onChange={handleFileChange} />
                    </Form.Group>
                    <Button onClick={handleUpload} variant="primary" className="btn btn-block rounded-pill m-1">Upload</Button>
                </div>

                <div>
                    <h4>File List</h4>
                        <div style={{ height:'200px', overflowX: 'auto' }}>
                            <table style = {{ borderCollapse: 'collapse' }}>
                                <tbody>
                                    {fileList.map((fileName,index) => (
                                    <tr key={fileName}>
                                        <td className='p-2'>{index+1}. </td>
                                        <td className='p-2 pe-5' onClick={() => handleFileClick(fileName)} style={{cursor:"pointer"}}>{fileName}</td>
                                        <td className=' ps-5'><Button onClick={() => handleFileClick(fileName)} variant="success" className="btn btn-block rounded-pill m-1">View</Button></td>
                                        <td><Button onClick={() => handleDelete(fileName)} variant="danger" className="btn btn-block rounded-pill m-1">Delete</Button></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    <hr />
                        <h4>Selected File Content</h4>
                        <Button onClick={handleCopy} variant="light" className="btn btn-block rounded-pill m-1">{copied ? 'Copied!' : 'Copy'}</Button><br/>
                    <textarea
                        className='p-3 bg-light text-dark rounded'
                        style={{ width: '100%' }} // Set the width to 100%
                        rows={15} // Providing a numeric value directly
                        cols={170}
                        value={selectedFileContent}
                        readOnly
                    />
                </div>
            </div>
          </Col> 
      </Row>
    </Container>
  );
};

export default Upload_Text;