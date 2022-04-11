import React, { useState, useEffect} from 'react';
// useState gets a state variable containing the data from the backend
// ^ will be used to render data on the page

// useEffect is used to fetch the data from the backend on first render

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch the data from "localhost:5000/members"
    // then get the json from the response
    // then set the data variable above to the contents of the json
    fetch("/members").then(
      response => response.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, []);
    

  return (
    <div>

      {(typeof data.members === 'undefined') ? (
        <p>Loading Data...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App