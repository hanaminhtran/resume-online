import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FiDownload } from "react-icons/fi";
import resume from '../assets/media/Minh_Tran_CV.pdf';

export default function ResumeOnePage() {
    
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(2);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    
    
    return(
        <div className='m-5 d-inline-flex'>
            <div>
                <a href={resume} target="_blank" className='resumeLink'><FiDownload /> Resume</a> 
            </div>
            
            <Document
                file={resume}
                onLoadSucess={onDocumentLoadSuccess}
                >
                 <Page scale={1.2} pageNumber={1} />

              
            </Document>

            <Document 
                file={resume}
                onLoadSucess={onDocumentLoadSuccess}
            >
               
                <Page scale={1.2} pageNumber={2} />
            </Document>
        </div>
    );
};