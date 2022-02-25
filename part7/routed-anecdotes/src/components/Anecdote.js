import React from "react";

const Anecdote = ({ anecdote }) => {
  const padding = {
    paddingBottom: 10,
  };
  if(!anecdote) return null
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <div style={padding}>has {anecdote.votes}</div>
      <div style={padding}>
        for more info see{" "}
        <a href={anecdote.info}>
          {anecdote.info}
        </a>
      </div>
    </div>
  );
};

export default Anecdote;
