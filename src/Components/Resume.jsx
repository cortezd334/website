import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import resume from '../utils/Danira_Cortez_Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

// import { PDFViewer, Page, Document } from '@react-pdf/renderer';

export default function Resume() {

    return(
        <div className='res'>
            <h2>Resume</h2>
        {/* <a href="https://onedrive.live.com/embed?cid=D3D5958DCD632659&resid=D3D5958DCD632659%2124332&authkey=ALSmKVXg43JchT8&em=2">JIC</a> */}
        {/* <iframe src="https://onedrive.live.com/embed?cid=D3D5958DCD632659&resid=D3D5958DCD632659%2124332&authkey=ALSmKVXg43JchT8&em=2" height='800px' width='80%' frameborder="0" scrolling="no"></iframe> */}
        {/* <iframe src="https://onedrive.live.com/embed?cid=D3D5958DCD632659&resid=D3D5958DCD632659%2124332&authkey=ALSmKVXg43JchT8&em=2" width="476" height="288" frameborder="0" scrolling="no"></iframe> */}
        {/* https://www.linkedin.com/in/daniracortez/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADCx0FABDlD78bOih0NZ1U_-qioE5tpZJbY,1605229749849)/ */}
            <Document
                file={resume}
                onLoadError={console.error}
                style={{ width: '100vw', height: 'auto'}}
            >
                <Page pageIndex={0}/>
            </Document>
        </div>
    )
}