const { useEffect } = require('react');
const React = require('react');
const {useState,useRef} = React;

function getWinNumbers() {
    const candidate = Array(45)
      .fill()
      .map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(
        candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
      );
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  };


const Lotto = () => {
    const [winNumbers,setWinNumbers] = useState(getWinNumbers());
    const [winBalls,setWinBalls] = useState([]);
    const [bonus,setBonus] = useState(null);
    const [redo,setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        
    },[]);

    const onclickRedo = () => {
     console.log('onClickRedo');
     setWinNumbers(getWinNumbers());
     setWinBalls([]);
     setBonus(null);
     setRedo(false);
     timeouts.current = [];
    }


    return (
        <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => {
            console.log(v);
            return (
              <>
                <Ball key = {v} number={v} />
              </>
            );
          })}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onclickRedo}>한 번 더!</button>}
      </>

    )
}

module.exports = Lotto;