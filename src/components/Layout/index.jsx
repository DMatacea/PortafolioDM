import { MobileBottomBar } from "../Navbar/MovileMenu"

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