import { MainComponent } from "./Componentes/MainComponent"
import { Header } from "./Componentes/Header"
import { ArticleConteiner } from "./Componentes/ArticleConteiner"
import { CardConteiner } from "./Componentes/CardConteiner"

function App() {
  

  return (
    <main className="px-2 pt-3">
      <Header />
      <div className=" lg:flex lg:gap-8">
        <MainComponent />
        <ArticleConteiner />
      </div>
      <CardConteiner /> 
    </main>
  )
}

export default App
