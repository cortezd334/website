import React from 'react';
import resume from '../utils/E&W.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


export default function Resume() {

    return(
        <div className='res'>
            <h2 className='heading'>Resume</h2>
            <a href="https://onedrive.live.com/View.aspx?resid=D3D5958DCD632659!61963&authkey=!ANfuogTD86LmIQw" rel="noreferrer" target='_blank'>
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