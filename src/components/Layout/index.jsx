import { MobileBottomBar } from "../Navbar/MovileMenuSecundary"

function Layout({ children }) {
    return(
        <>
            <main className="relative">
                {children}
            </main>
            <MobileBottomBar/>
        </>
    )
}
  
export { Layout }