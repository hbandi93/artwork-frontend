import axios from "axios";
import { useEffect,useState } from "react";


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects')
    .then(res => {
      console.log('this is ', res.data)
      setData(res.data)
     
      }).catch(err => console.log(err))
  }, [])

  const arr = data.map((data, index) => {
    return (
      <tr>
    <td>{data.objectIDs}</td>
    <td>{data.total}</td>
    <td>Germany</td>
  </tr>
    )
  })

  return (
    <div className="App">
      <h1>This is our art gallery</h1>
      <table>
  <tr>
    <th>ID </th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  {arr}
  
</table>
    </div>
  );
}

export default App;
