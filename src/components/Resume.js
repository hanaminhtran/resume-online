import React, {useState} from 'react';
import PdfViewer from '../components/PdfViewer'
import {Button} from 'antd';
import pdf from '../assets/media/Minh_Tran_CV.pdf'
import '../App.css';

function Resume() {

  const [showPdf, setShowPdf] = useState(false)

  return (
    <div className="App">
      <PdfViewer pdf={pdf}
                 onCancel={()=>setShowPdf(false)}
                 visible={showPdf}
      />
     
    </div>
  );
}

export default Resume;

