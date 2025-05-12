// Components 
import Header from "../components/layout/Header"
import Main from "../components/layout/Main"

function App({ children }) {
   return (<>
      <Header />
      <Main appRouter={children} />
   </>)
}

export default App 