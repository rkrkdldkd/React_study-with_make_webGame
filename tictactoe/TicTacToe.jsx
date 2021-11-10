const React = require('react');
const {useState,useReducer} = React;
const Table = require('./Table');

const initalState = {
    winner:'',
    turn: 'O',
    tableData:[['','',''],['','',''],['','','']],

}

const TicTacToe = () => {

    const [state,dispatch] = useReducer(reducer,initalState);

    // const [winner,setWinner] = useState('');
    // const [turn,setTurn] = useState('O');
    // const [tableData,setTableData] = useState(['','',''],['','',''],['','','']);


    return (
        <>
       <Table/>
       {winner && <div>{winner}님의 승리</div>}
       </>
    )
}

module.exports = Td;