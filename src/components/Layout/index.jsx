import { MobileBottomBar } from "../Navbar/MovileMenu"

function Layout({ children }) {
    return(
        <>
            <main>
                {children}
            </main>
            <MobileBottomBar/>
        </>
    )
}
  
export { Layout }