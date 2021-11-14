const React = require('react');
const Td = require('./Td');

const Tr = ({rowIndex,rowData,dispatch}) => {
    return (
        <tr>
        {Array(rowData.length).fill().map((td,i) =><Td dispatch = {dispatch} rowIndex = {rowIndex} cellData = {rowData[i]} cellIndex = {i}/> )}
        </tr>
    )
};

module.exports = Tr;