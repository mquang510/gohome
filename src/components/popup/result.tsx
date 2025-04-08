import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { failText, resultText } from '../../utils/language-vi.ts'

export default function ResultPopup({ isCompleted, onHide, total, isFailed, time } : any) {
  let text = isFailed ? failText : resultText
  return (
    <>
      <Modal show={isCompleted} centered={true}>
        <Modal.Header>
          <Modal.Title>{text.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            {text.body}
          </div>
          <div className='mb-3'>
            {text.information} {total}
          </div>
          <div className='mb-3'>
            {text.time} {time}{text.second}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            {text.buttons.start}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}