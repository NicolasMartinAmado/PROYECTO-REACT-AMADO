import Userdetail from "./userdetail";
import "./contact.css"
const PageContacto = ()=> {


    return (
      <> 
      
       <form id="form" action="">
       <h2 className="ttl">REGISTRESE COMPLETANDO LOS DATOS</h2>
        <div className="nam">
            <label >Nombre</label>
           
            <input className="nombre" type="text" />
        </div>
        <div className="apellidos">
            <label >Apellido</label>
         
           <input className="apellido" type="text" />
        </div>
        <div className="emails">
            <label  >E-mail</label>
          
          <input className="email" type="text" />
        </div>
        <div className="tarjetas">
            <label  for="Tarjeta">Tarjeta de Debito/Credito</label>
          
           <input className="tarjeta" type="text" />
          
            <label  for="COD">Codigo de Seguridad</label>
           <input type="text" />
           
      </div>
      <div>
        <input type="submit" name="Registrarme" id="regi" value="Registrarme" />
      </div>
       
        </form>


<h3 className="titulo_ayuda">AYUDA</h3>

<section className="ayuda">
    <a href="">No recuerdo mi contraseña</a>
    <a href="">Terminos y condiciones</a>
    <a href="">No me acepta la tarjeta</a>
    <a href="">Informacion legal</a>
    <a href="">No puedo realizar una compra</a>
    <a href="">Politica y Privacidad</a>
    <a href="">Realice un pago y no me figura la compra</a>
    <a href="">Cualquier consulta llama 0800 222 356</a>
</section>

<h3 className="titulo_wpp-email">SI NO RESOLVISTE TU PROBLEMA, HABLA CON ALGUNO DE NUESTROS ASESORES</h3>

<section className="wpp-email">
    <a href="">Wpp: +54 9 1152364587</a>
    <a href="">Email: Afaasesora@yahoo.com.ar</a>
</section>
</>

    )
}

export default PageContacto;