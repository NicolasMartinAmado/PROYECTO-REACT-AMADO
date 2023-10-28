import "../css/contact.css"
import Layout from "../layout/layout";
import Adduserform from "./Adduserform";

const PageContacto = () => {

    return (
        <>
            <Layout>
                <Adduserform />
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

            </Layout>
        </>

    )
}

export default PageContacto;