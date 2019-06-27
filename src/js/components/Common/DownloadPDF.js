import React from 'react';

import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

function DownloadPDF({ labelName, selector, fileName, containerClass, buttonClass }) {
  if (!selector) {
    console.error("DownloadPDF: No seletor given");
    return null;
  }

  labelName = (labelName) ? labelName : "Download PDF";
  fileName = (fileName) ? fileName : 'download';

  function download() {
    html2canvas(document.querySelector(selector), {
      allowTaint: true,
      useCORS: true
    }
    ).then(function (canvas) {
      let cnv = canvas.toDataURL("image/png");

      var doc = new jsPDF();
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      doc.addImage(cnv, 'JPEG', 0, 0, width, height);
      doc.save(fileName + '.pdf');
    });
  }

  return (
    <div className={containerClass}>
      <div
        className={buttonClass}
        style={{
          width: 'auto',
          textAlign: 'center',
          margin: '5px',
          display: 'inline-block',
          padding: '5px',
          backgroundColor: '#8b5cdd',
          color: '#FFF',
          fontSize: '14px',
          cursor: 'pointer'
        }}
        onClick={download}
        data-html2canvas-ignore="true"
      >
        {labelName}
      </div>
    </div>
  )
}

export default DownloadPDF;