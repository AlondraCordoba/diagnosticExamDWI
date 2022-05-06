import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './assets/img/bostonimg.jpg';
import imgdess from './assets/img/desserts.webp';
import './App.css';

function App() {
  return (
    <div class="App">
      <Navbar sticky="top" className="navstyle bg-white">
        <Container>
          <Navbar.Brand href="#" className="textbrand">Best City Guide</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto">
                <Nav.Link href="#">Ice Cream</Nav.Link>
                <Nav.Link href="#">Donuts</Nav.Link>
                <Nav.Link href="#">Tea</Nav.Link>
                <Nav.Link href="#">Coffee</Nav.Link>
            </Nav>
           </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="containerbanner">
        <Row>
          <Col></Col>
          <Col>
            <img src={logo} className="imgbanner" />
            <div>
              <h1 className="titlebest">The Best City</h1>
              <p className="paragrapthbest">The best drinks and eats in the best city ever</p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>

      <Container className="containerinfo">
        <Row>
          <Col className="text1">
            <h3>Welcome!</h3>
            <p>Everithing in this city is worth waiting in line for.</p>
            <p>Cupcake ipsum dolor sit amet consectetur. Amet chocolate liquorice candy lollipop croissant candy canes cake. Gingerbread powder muffin. Icing cotton candy. Croissant buttery, flaky, French viennoiserie pastry inspired by the shape of the Austrian kipferl. Pastry chocolate pasty jelly croissant.</p>
            <p>Cake form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations. Jelly beans are small bean-shaped sugar candies with soft candy shells and thick gel interiors (see gelatin and jelly). </p>
          </Col>
          <Col className="text1">
           <h3>Great food</h3>
           <div className="imgcaption">
            <img src={imgdess} className="imgdesse" />
              <div className="imgtext">
                <p>  <b>Some Header Content Caption <br></br><br></br></b> "A croissant is a buttery, flaky, French viennoiserie pastry inspired by the shape of the Austrian kipferl. This sweet confection is ideal for snacking"</p>
              </div>
           </div>
           <p>A croissant is a buttery, flaky, French viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough. Pie Brownies are a fun, indulgent and absolutely irresistible recipe!</p>
          </Col>
          <Col className="text1">
           <h3>How to get here</h3>
           <p><b>Plane: </b>Tiramisu Caramels are bite-size, dark chocolate, and tiramisu-flavored rounds covered in fine cocoa powder! This sweet confection is ideal for snacking</p>
            <p><b>Train: </b>Pie apple pie is a pie in which the principal filling ingredient is apples. The earliest printed recipe is from England. Apple pie is often served with whipped cream, ice cream, or cheddar cheese.</p>
            <p><b>Car: </b> Jelly Cotton Candy bean candy confection is an immersive experience into your favorite pink freshly spun-sugar treats that melt. </p>
          </Col>
        </Row>
      </Container>

      <div class="text-center text-lg-start text-muted footercolor">
        <div class="text-center p-4">
           © 2022 Residents of The Best City Ever.
        </div>
      </div>
    </div>
  );
}

export default App;
