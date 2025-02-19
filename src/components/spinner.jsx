import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';
function SpinnerRound() {
  return (
    <>
    <Button variant="dark" disabled>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </Button>{' '}
    <Button variant="dark" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  </>
  );
}

export default SpinnerRound;