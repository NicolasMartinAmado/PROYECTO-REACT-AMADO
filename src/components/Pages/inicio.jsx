import PageDetail from "./detail";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SumarAlCarrito from "../ItemCount";


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Mock from "../data/mock";

const inicio = ()=>{
    return(
        <><h1 style={{color:"white", textAlign:"center", padding:50}} >BIENVENIDO A LA PAGINA OFICIAL DE MESSI</h1>
        <PageDetail />
        
  <Mock/>

    <Form style={{backgroundColor:"black",backgroundAttachment:"fixed", backgroundSize: "20 rem",display:"flex", justifyContent:"center", textAlign:"center"}}>
      <Form.Group style={{ justifyContent: "center"}} as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label style={{color:"white", fontSize: "30px"}} column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="mail" placeholder="example123@gmail.com"/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label style={{color:"white", fontSize: "30px"}} column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
  


        
        
        </>
    )
}
export default inicio;