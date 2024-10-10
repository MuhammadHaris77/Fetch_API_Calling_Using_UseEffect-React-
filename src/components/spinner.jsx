import Spinner from 'react-bootstrap/Spinner';

function SpinnerRound() {
  return (
    <Spinner className='container my-auto' animation="border" role="status">
      <span className="visually-hidden d-flex justify-content-center">Loading...</span>
    </Spinner>
  );
}

export default SpinnerRound;