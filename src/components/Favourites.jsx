import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromFavouriteAction } from '../redux/action/action';

const Favourites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favouriteSelected = useSelector((state) => state.favourite.list);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favouriteSelected.length > 0 ? (
              favouriteSelected.map((fav, i) => (
                <ListGroupItem className='d-flex align-items-center' key={i}>
                  <StarFill
                  color="gold"
                    className="me-2"
                    onClick={() => dispatch(removeFromFavouriteAction(fav))}
                    style={{ cursor: 'pointer' }}
                  />
                  <Link className='text-decoration-none text-success' to={`/${fav}`}>{fav}</Link>
                </ListGroupItem>
              ))
            ) : (
              <p>No favourites selected</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
