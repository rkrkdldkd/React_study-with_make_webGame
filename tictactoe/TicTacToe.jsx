const React = require('react');
const {useState,useReducer,useCallback} = React;
const Table = require('./Table');

const initalState = {
    winner:'',
    turn: 'O',
    tableData:[['','',''],['','',''],['','','']],

};

const SET_WINNER = 'SET_WINNER';
const CLICK_CELL = 'CLICK_CELL';
const Change_TURN = 'Change_TURN';

exports.CLICK_CELL = CLICK_CELL;

const reducer = (state,action) => {
    switch(action.type){
        case SET_WINNER: 
        console.log(state);
            return {
                ...state,
                winner:action.winner,
            };
        
        case CLICK_CELL:
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            return{
                ...state,
                tableData,
            };

        case Change_TURN : {
            return {
                ...state,
                turn:state.turn === 'O'? 'X' : 'O',
            }
        }
    }
};

const TicTacToe = () => {

    const [state,dispatch] = useReducer(reducer,initalState);

    // const [winner,setWinner] = useState('');
    // const [turn,setTurn] = useState('O');
    // const [tableData,setTableData] = useState(['','',''],['','',''],['','','']);

    const onClickTable = useCallback(() => {
        dispatch({type: SET_WINNER, winner: 'O'});
    },[]);


    return (
        <>
       <Table onClick={onClickTable} tableData = {state.tableData} dispatch = {dispatch}/>
       {state.winner && <div>{state.winner}님의 승리</div>}
       </>
    )
}

module.exports = TicTacToe;