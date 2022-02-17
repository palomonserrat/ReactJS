import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";

const Footer = () => {
    return (
        <Container fluid as="footer">
            <p>&reg; ChamBooks</p>
            <img style={{width: 70}} src={logo} />
        </Container>
    )
}

export default Footer;