import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const[formulariosEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const[nomeUsuario, setnomeUsuario] = useState('');

  return (
    <>
    <input type="text" onBlur={(e) => setnomeUsuario(e.target.value)} />
    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}
    </>
  )
}

export default App
