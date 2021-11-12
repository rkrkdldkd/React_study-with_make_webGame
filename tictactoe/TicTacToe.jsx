const React = require('react');
const {useState,useReducer,useCallback} = React;
const Table = require('./Table');

const initalState = {
    winner:'',
    turn: 'O',
    tableData:[['','',''],['','',''],['','','']],

};

const SET_WINNER = 'SET_WINNER';

const reducer = (state,action) => {
    switch(action.type){
        case SET_WINNER: 
        console.log(state);
            return {
                ...state,
                winner:action.winner,
            };
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
       <Table onClick={onClickTable} tableData = {state.tableData}/>
       {state.winner && <div>{state.winner}님의 승리</div>}
       </>
    )
}

module.exports = TicTacToe;