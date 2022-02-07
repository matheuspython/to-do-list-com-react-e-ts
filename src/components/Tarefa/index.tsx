import React, { useState } from 'react';

import { Container } from './styles';

interface Tarefa {
  tarefa: string
}

export const Tarefa: React.FC<Tarefa> = ({ tarefa }) => {
  const [estado, setEstado] = useState(true)
  
  return (
    <Container style={{display: estado ? 'flex' : 'none'}}>
      <p>{tarefa}</p> 
      <img
       src="https://cdn-icons-png.flaticon.com/512/4140/4140207.png" 
       alt="apagar" 
       onClick={()=> setEstado(false)}
      />
    </Container>
  )
}
