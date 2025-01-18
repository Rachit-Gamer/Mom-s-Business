// filepath: /src/Home.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Welcome to Millet World</Card.Title>
          <Card.Text>
            Explore the wonderful world of millets and their versatile products!
          </Card.Text>
          <Button variant="primary" href="/products">Explore Products</Button>
        </Card.Body>
      </Card>
      <Row className="mt-4">
        <Col md={4}>
          <h2>Why Millets?</h2>
          <p>Millets are healthy, sustainable, and versatile. Discover their amazing benefits!</p>
        </Col>
        <Col md={4}>
          <h2>Our Products</h2>
          <p>We offer a wide range of millet-based products including ready-to-eat snacks, bakery items, protein powders, and more.</p>
        </Col>
        <Col md={4}>
          <h2>Contact Us</h2>
          <p>Have any questions or want to place a bulk order? Get in touch with us!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;