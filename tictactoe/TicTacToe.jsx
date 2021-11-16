import React,{useState,useReducer,useEffect} from 'react';
import Table from './Table';


const TicTacToe = () => {

    const [tableData,setTableData] = useState([['','',''],['','',''],['','','']]);
    const [test,setTest] = useState('test');


    return(
        <>
        <Table tableData = {tableData} test = {test}/>
        </>
    )
};

export default TicTacToe;