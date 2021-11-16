import React from 'react';
import Tr from './Tr';

const Table = ({test,TableData}) => {
   

    return (
       <table>
           <tbody>
            <Tr test = {test}/>
           </tbody>
       </table>
    )

};

export default Table;