import React, { FormEvent, useState } from 'react';
import { taskList } from '../../Utils/listOfTaks'
import { Tarefa } from '../Tarefa';

import { Container } from './styles';

export const Main: React.FC = () => {
  const [tarefa, setTarefa] = useState('')
  function addTask(event: FormEvent){
    event.preventDefault()
    taskList.push(tarefa)
    console.log(taskList)
    setTarefa('')
  }
  return (
    <Container>
      <div className="container">
        <form onSubmit={addTask}>
          <input onChange={event => setTarefa(event.target.value)} placeholder='digite aqui' type="text" />
          <button type='submit'>adcionar</button>
        </form>
        <ul>
          {taskList.map(item => (
            <Tarefa
              key={item}
              tarefa={item}            
            />
          ))}
        </ul>
      </div>
    </Container>
  )
}
