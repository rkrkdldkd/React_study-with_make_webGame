const { useCallback } = require('react');
const React = require('react');
const {useState,useRef,useMemo,useEffect} = React;

const Ball = require('./Ball');

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
  const lottoNumbers = useMemo(() => getWinNumbers(),[]);
    const [winNumbers,setWinNumbers] = useState(lottoNumbers);
    const [winBalls,setWinBalls] = useState([]);
    const [bonus,setBonus] = useState(null);
    const [redo,setRedo] = useState(false);
    const timeouts = useRef([]);
    const mounted = useRef(false);

    useEffect(() => {
      if(!mounted.current){
        mounted.current = true;
      }else{
      console.log('componentDidMount');
      }
    },[timeouts.current]);

    useEffect(() => {
      
      console.log('componentShouldUpdate');
      for (let i = 0; i < winNumbers.length-1; i++) {
        console.log('실행');
        timeouts.current[i] = setTimeout(() => {
          setWinBalls((prev) => [...prev,winNumbers[i]]) 
      }, (i+1) * 1000);
    };
    timeouts.current[6] = setTimeout(() => {
        setBonus(winNumbers[6]);
        setRedo(true);
      },7000);

      return () => {
        timeouts.current.forEach((v) => {
          clearTimeout(v);
        });
      };

    },[timeouts.current]);

    const onclickRedo = useCallback(()=> {
     console.log('onClickRedo');
     console.log(winNumbers);
     setWinNumbers(getWinNumbers());
     setWinBalls([]);
     setBonus(null);
     setRedo(false);
     timeouts.current = [];
    },[]);


    return (
        <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => {
            return (
              <>
                <Ball key = {v} number={v} />
              </>
            );
          })}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={onclickRedo}>한 번 더!</button>}
      </>

    )
}

module.exports = Lotto;