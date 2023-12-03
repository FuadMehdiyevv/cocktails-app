import { useEffect, useState } from "react"
import CocktailService from "../service/cocktail"
import { Card, Col, Row } from "react-bootstrap"

const cocktail = new CocktailService()

function Random() {
    const [randcockt, setRandcockt] = useState({})
    
    useEffect( ()=> {
        cocktail.randomCocktail().then(cockt => setRandcockt(cockt) )
    }, [])

    let {cath, desc, glass, img, ingr=[], name, sub } = randcockt
    return (
        <div>
            <Card>
                <Row xs={1} md={2}>
                    <Col>
                        <Card.Img variant="top" src={img} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <h3>{name}</h3>
                            <Card.Title>{cath}: {sub}</Card.Title>
                            <Card.Text><small>{glass}</small></Card.Text>
                            <ul>
                                {
                                    ingr.map( (q, i) => <li key={i}>{q}</li>)
                                }
                            </ul>
                            <Card.Text>{desc}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Random