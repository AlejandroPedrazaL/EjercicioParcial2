import {Card} from 'react-bootstrap'

function Detail(props) {
    const film = props["film"]
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={film["poster"]} />
            <Card.Body>
                <Card.Title>{film["name"]}</Card.Title>
                <Card.Text>
                    {film["description"]}
                </Card.Text>
                <Card.Text><b>Cast: {film["cast"]}</b></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Detail