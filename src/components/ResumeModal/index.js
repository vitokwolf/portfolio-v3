import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import resume from '../../assets/victor-lupascu-resume.pdf'
import './style.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function ResumeModal() {
  return (
    <div id="resume-modal" className="uk-flex-top" uk-modal="true">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <div className="resume-btns uk-flex uk-flex-right">
          <a
            href={resume}
            className="pdf-save"
            uk-icon="icon: download; ratio: 1.3"
            download="victor-lupascu-resume.pdf"
            target="_blank"
          ></a>
          <button
            className="uk-modal-close"
            type="button"
            uk-close="true"
          ></button>
        </div>
        <Document file={resume} onContextMenu={(e) => e.preventDefault()}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}

export default ResumeModal
