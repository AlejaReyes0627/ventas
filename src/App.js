import Header from "./Components/header";
import Menu from "./Components/menu";
function App (){
  return (
    <div>
      <h1>
        <Header/>
        <Menu titulo="Universidad de Ibagué" subtitulo="Sistemas"/>
      </h1>
    </div>
  );
}

export default App;
