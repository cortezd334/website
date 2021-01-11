import React from 'react';
import resume from '../utils/Resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


export default function Resume() {

    return(
        <div className='res'>
            <h2 className='heading'>Resume</h2>
            <a href="https://onedrive.live.com/embed?cid=D3D5958DCD632659&resid=D3D5958DCD632659%2161955&authkey=AJ6AakxKjWLUCIE&em=2" rel="noreferrer" target='_blank'>
                <Document
                    file={resume}
                    onLoadError={console.error}
                    style={{ width: '100vw', height: 'auto'}}
                >
                    <Page pageIndex={0}/>
                </Document>
            </a>
        </div>
    )
}