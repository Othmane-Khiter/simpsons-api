import axios from "axios";
import React, { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";


function App() {
  const [quoteList, setQuoteList] = React.useState([]);
  
useEffect(()=>{
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(({data}) => {
      setQuoteList(data)
    })
    .catch((myError) => {console.warn(myError.message);
    })
}, [])

const newQuote = ()=>{
  
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(({data}) => {
      setQuoteList(data)
    })
    .catch((myError) => {console.warn(myError.message);
    })
}



return (
    <div>
      <button onClick={newQuote}>Next Quote
      </button>
      {quoteList.map((quote, index) => (
      <QuoteCard key={index} {...quote} />
      ))}
    </div>
  );
}

export default App;
