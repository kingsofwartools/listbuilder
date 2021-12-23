import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'components/common/Button';
import html2pdf from 'html2pdf.js';

export const ExportModal = ({ exportElement, pdfTitle, ...otherProps}) => {

  const [pageSize, setPageSize] = useState('a4');
  const [verticalMargin, setVerticalMargin] = useState(0.5);
  const [horizontalMargin, setHorizontalMargin] = useState(0.5);
  const [fileName, setFileName] = useState(pdfTitle);

  const exportPdf = () => {
    html2pdf(exportElement, {
      pagebreak: {
        mode: 'css'
      },
      margin: [verticalMargin, horizontalMargin],
      filename: `${fileName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {},
      jsPDF: { unit: 'in', format: pageSize, orientation: 'portrait' }
    });
  }

  return (
    <Modal
      {...otherProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Export as pdf
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exportPdfForm.fileName">
            <Form.Label>Filename</Form.Label>
            <Form.Control type="text" value={fileName} onChange={({ target: { value } }) => setFileName(value)}/>
          </Form.Group>
          <Form.Group controlId="exportPdfForm.pageSize">
            <Form.Label>Page size</Form.Label>
            <Form.Control value={pageSize} onChange={({ target: { value }}) => setPageSize(value)} as="select" custom>
              <option value="a4">A4</option>
              <option value="letter">Letter</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exportPdfForm.verticalMargin">
            <Form.Label>Vertical Margin</Form.Label>
            <Form.Control value={verticalMargin} onChange={({ target: { value }}) => setVerticalMargin(Number(value))} as="select" custom>
              <option value="0.25">0.25"</option>
              <option value="0.5">0.5"</option>
              <option value="1">1"</option>
              <option value="1.5">1.5"</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exportPdfForm.horizontalMargin">
            <Form.Label>Horizontal Margin</Form.Label>
            <Form.Control value={horizontalMargin} onChange={({ target: { value }}) => setHorizontalMargin(Number(value))} as="select" custom>
              <option value="0.25">0.25"</option>
              <option value="0.5">0.5"</option>
              <option value="1">1"</option>
              <option value="1.5">1.5"</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button text="Export" onClick={exportPdf}/>
      </Modal.Footer>
    </Modal>
  );
}
