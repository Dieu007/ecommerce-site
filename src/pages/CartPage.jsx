import { Container, Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, updateCartItemQuantity } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
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
                <td>
                  <Form.Control
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value) || 1)}
                    style={{ width: "80px" }}
                  />
                </td>
                <td>{item.price * item.quantity}€</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <h3 className="text-end mt-4">Total: {totalPrice.toFixed(2)}€</h3>
      <div className="text-end">
        <Link to="/checkout">
          <Button variant="success" className="mt-4">
            Passer à la validation
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default CartPage;
