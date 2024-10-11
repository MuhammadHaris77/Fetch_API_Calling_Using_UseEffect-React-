import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal() {
  return (
    <div
      className="modal show"
      style={{ display: 'block',  }}
    >
      <Modal.Dialog>
        <Modal.Header  className='bg-light'>
           <p > Page Not Found</p>
        </Modal.Header>

        <Modal.Body className='text-dark' style={{height:200,width:400,}}>
          <h1 >Error Found 404 :(</h1>
        </Modal.Body>

        <Modal.Footer className='bg-light'>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ErrorModal;