import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </>
  )
}

const Anecdote = (props) => {
  if(props.votes === 0 && props.text === 'Anecdote with most votes') {
    return (
      <>
        <h1>{props.text}</h1>
        <p>No votes yet</p>
      </>
    )
  }
  return (
    <>
      <h1>{props.text}</h1>
      <p>{props.anecdotes}</p>
      <p>has {props.votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));
  const max = anecdotes.length - 1;
  const min = 0;

  const nextAnecdote = () => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setSelected(random);
  }

  const changeVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log(typeof(copy))
  }

  const mostVotes = () => {
    return Math.max(...votes);
  }
  
  return (
    <div>
      <Anecdote text='Anecdote of the day' anecdotes={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={changeVotes} text='vote' />
      <Button handleClick={nextAnecdote} text='next anecdote' />
      <Anecdote text='Anecdote with most votes' anecdotes={anecdotes[votes.indexOf(mostVotes())]} votes={mostVotes()} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)