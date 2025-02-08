import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

function OrderConfirmationPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container className="text-center mt-5">
      <MdCheckCircle size={80} className="text-success mb-4 animate__animated animate__bounceIn" />
      <h1 className="text-success">Commande Confirmée !</h1>
      <p className="lead mt-3">
        Merci pour votre commande. Nous vous enverrons une confirmation par e-mail très bientôt.
      </p>
      <Button variant="primary" className="mt-4" onClick={handleGoHome}>
        Retour à la page d'accueil
      </Button>
    </Container>
  );
}

export default OrderConfirmationPage;
