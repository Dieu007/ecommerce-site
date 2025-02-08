import { Container, Table, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { MdCheckCircle } from "react-icons/md";

function CheckoutPage() {
  const { cart, setCart } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);

    setTimeout(() => {
      setOrderConfirmed(false);
      setCart([]); // Vider le panier
      navigate("/order-confirmation");
    }, 2000);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Validation de la commande</h1>

      {orderConfirmed && (
        <Alert variant="success" className="d-flex align-items-center">
          <MdCheckCircle size={24} className="me-2 text-success" />
          🎉 Commande confirmée ! Redirection vers la confirmation...
        </Alert>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}€</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}€</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3 className="text-end">Total : {totalPrice.toFixed(2)}€</h3>
      <Button variant="primary" className="mt-4" onClick={handleConfirmOrder}>
        Confirmer la commande
      </Button>
    </Container>
  );
}

export default CheckoutPage;
