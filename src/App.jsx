import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const[formulariosEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const[nomeUsuario, setnomeUsuario] = useState('');

  return (
    <>
    <input className="barra container" placeholder="Digite um nome de usuário do GitHub" type="text" onBlur={(e) => setnomeUsuario(e.target.value)} />
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