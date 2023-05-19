import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './ErrorPage.css'
import { Navigate, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
      const navigate = useNavigate()

      return (
            <Container className="error-page">
                  <Row className="justify-content-center align-items-center">
                        <Col xs={12} sm={8} md={6} lg={4}>
                              <h1>Oops!</h1>
                              <p>Something went wrong.</p>
                              
                              <p>Please try again later.</p>
                              <Button variant="primary"  onClick={()=>navigate(-1)}>Go Back</Button>
                        </Col>
                  </Row>
            </Container>
      );
};
export default ErrorPage