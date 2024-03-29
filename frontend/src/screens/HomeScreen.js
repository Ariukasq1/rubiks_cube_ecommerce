import { useEffect, useReducer, useContext } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Slider from '../components/Carousel';
import Container from 'react-bootstrap/esm/Container';
import HeaderMenu from '../components/HeaderMenu';
import Navbar from 'react-bootstrap/Navbar';
import { Store } from '../Store';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const { state } = useContext(Store);
  const { cart, userInfo } = state;
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(
          'http://localhost:5001/api/products'
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>MR Puzzle Shop</title>
      </Helmet>

      <Slider />

      <Container className="pt-5">
        <div className="products">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row className="width-100 ">
              {products.map(product => (
                <Col
                  key={product.slug}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-3"
                >
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
}

export default HomeScreen;
