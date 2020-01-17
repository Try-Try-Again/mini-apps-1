const React = require('react');
const ReactDOM = require('react-dom');

const Cell = (props) => (
    <td border= "1px solid black" bgcolor="tan">{props.letter} {props.number}</td>
)
const Row = (props) => (
  <tr>
    {
      ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        .map((element, index) => <Cell key={index} letter={element} number={props.number}/>)
    }
  </tr>
)

const Board = () => (
  <table id="board">
    <thead></thead>
    <tbody>
      {[...Array(6).keys()].map(number => <Row key={number} number={number}/>)}
    </tbody>
  </table>
)

ReactDOM.render(<Board/>, document.getElementById('app'));
