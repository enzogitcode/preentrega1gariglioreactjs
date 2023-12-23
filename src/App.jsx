import React from 'react'
import TituloPrincipal from './Componentes/TituloPrincipal/tituloprincipal';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <TituloPrincipal/>
      <NavBar/>
      <ItemListContainer greeting={"Horneamos emociones / \n Pastelería Take Away"}/>
      </>
  )
}

export default App