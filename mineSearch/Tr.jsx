import React,{useContext} from 'react';
import { TableContext } from './MineSearch';
import Td from './Td';

const Tr = ({rowIndex}) => {
    const {tableData} = useContext(TableContext);

    return(
    <tr>
        {Array(tableData.length).fill().map((tr,i) => (<Td rowIndex = {rowIndex} cellIndex = {i}/>))}
    </tr>
    );

};

export default Tr;