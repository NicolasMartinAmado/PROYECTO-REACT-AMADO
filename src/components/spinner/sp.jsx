import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <div style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
         <Spinner  color='danger'/>
   <button style={{ width:"150px"}} >LOADING...</button>
     </div>
   
  );
}

export default BasicExample;