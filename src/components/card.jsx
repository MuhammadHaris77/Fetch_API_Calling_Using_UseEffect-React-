import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ item }) {
    return (

            <Card className=' px-2 m-2 ' key={item.id} style={{ width: '18rem' }} >
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                    <Card.Title >{item.title}</Card.Title>
                    <Card.Text>
                        {item.description && item.description.slice(0,40) }
                    </Card.Text>
                    <Card.Text>
                        <b>Brand : </b>{item.brand}     
                    </Card.Text>
                    <Card.Text>
                        <b>Category : </b>{item.category}     
                    </Card.Text>

                    <Button variant="primary">ADD TO CART</Button>
                </Card.Body>
            </Card>

    );
}

export default BasicExample;