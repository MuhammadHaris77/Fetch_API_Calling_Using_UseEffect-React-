import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ item }) {
    return (

            <Card className=' px-2 m-2 ' key={item.id} style={{ width: '22rem' }} >
                <Card.Img variant="top" height={140} width={30} src={item.thumbnail} />
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
                    <Card.Text>
                        <b>Price : </b>{item.price}     
                    </Card.Text>
                    <Card.Text>
                        <b>Rating : </b>{item.rating}     
                    </Card.Text>

                    <Button variant="warning"  >ADD TO CART</Button>
                </Card.Body>
            </Card>

    );
}

export default BasicExample;