import { Card, Offcanvas } from "react-bootstrap"

function Details({show, onHide, detail}) {
    let {cath, desc, glass, img, ingr=[], name, sub } = detail
  return (
    <>
        <Offcanvas show={show} onHide={onHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cocktail Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Card>
                    <Card.Img variant="top" src={img} />
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
                </Card>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Details