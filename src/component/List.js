import { Card, Col, Row } from "react-bootstrap"
import CocktailService from '../service/cocktail.js'
import { useEffect, useState } from "react"

let cocktails = new CocktailService()


function List({onShow}) {
    const [cocktArr, setCocktArr] = useState([])

    useEffect( () => {
        cocktails.byFirstLetter('m').then( res => setCocktArr(res))
    }, [] )

    return (
        <div>
            <Row xs={1} md={2} lg={4}>                
                {cocktArr.map( (item, i) => { 
                    let {cath, desc, glass, img, ingr=[], name, sub } = item
                    return(
                        <Col key={i}>
                            <Card onClick={ () => { onShow(item) } } className="my-2">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text className="shortener">{desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default List