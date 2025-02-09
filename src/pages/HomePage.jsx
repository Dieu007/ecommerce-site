import { Container, Row, Col, Card, Button } from "react-bootstrap";

const products = [
  { id: 1, title: "Produit 1", price: 20, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Produit 2", price: 30, image: "https://via.placeholder.com/150" },
];

function HomePage() {
  return (
    <Container>
      <h1 className="my-4">Nos Produits</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}€</Card.Text>
                <Button variant="primary" className="me-2">Détails</Button>
                <Button variant="success">Ajouter au panier</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
