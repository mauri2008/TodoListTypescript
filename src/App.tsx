import { useState} from 'react';
import * as C from './App.styled';
import { Item } from './types/item';

import {AddArea} from'./components/Addarea';
import {ListItem} from  './components/Listitem';


const App = ()=>{

  const [list, setList] = useState<Item[]>([
    {id:1, name:'Comprar pão',done:false},
    {id:2, name:'Comprar Margarina',done:false},
  ]);

  const handleAddTask = (taskName: string)=>{
    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name: taskName,
      done:false
    })
    setList(newList)
  }

  const handleEditTask =(editTask: Item)=>{
    
    let guardList= list.map(itemList=>{
        if(itemList.id === editTask.id)
        {
          itemList.done = editTask.done
        }
        return itemList
      })
    setList(guardList)
  }

  return (
    <C.Container>
      <C.Content>
        <C.Header>
          TODOList
        </C.Header>
          <AddArea  onEnter={handleAddTask}/>
        {
          list.map((item, index)=>(
            <ListItem key={index} item={item} editTasks={handleEditTask}/>
          ))
        }
      </C.Content>
    </C.Container>
  )
}

export default App;