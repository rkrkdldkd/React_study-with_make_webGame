const React = require('react');
const {useEffect, useCallback} = React;
const { CLICK_CELL,Change_TURN }  = require('./TicTacToe');

const Td = ({rowIndex,cellIndex,dispatch,cellData}) => {

    useEffect(() => {
        console.log({CLICK_CELL});
    },[]);
    const onClickTd = useCallback(() => {
        console.log(rowIndex,cellIndex);
        dispatch({type:CLICK_CELL, row:rowIndex, cell:cellIndex});
        dispatch({type:Change_TURN});

    },[]);

    return (
        <td onClick={onClickTd}>{cellData}
        </td>
    )
}

module.exports = Td;