import PageDetail from "./Pages/detail";
import Footer from "./footer";
import Header from "./header";

const Layout  = ({children}) => {
    return (
        <>
        <div id="Layo"> 
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
        </>
    )
}
export default Layout;