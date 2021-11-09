import { useState } from 'react'
import * as C from './styled'
import {Item} from '../../types/item'

type Props ={
    item: Item;
    editTasks: (Element:Item)=> void;
}

export const ListItem =( {item, editTasks }: Props)=> {

    const [isChecked, setIsChecked ] = useState(item.done);


    const handleChecked = (itemChecked: boolean)=>{
        setIsChecked(itemChecked);
        const segList = item;
        segList.done = isChecked;
        editTasks(segList);
    }

    return(
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={e => handleChecked(e.target.checked)}
            />
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    )
}