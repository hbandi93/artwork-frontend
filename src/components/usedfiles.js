/*

return (
    <div className="App">
    <h1>This is our art gallery</h1>
    <table>
      <tr>
        <td>{data.objectIDs}</td>

      </tr>
      {arr}

    </table>
    </div>
*/

/*const loadData = useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    async () => {

      await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/1')
      .then(res => {
        console.log('this is ', res.data)
        setData(res.data)
        
        const arr = []
        arr.push(data) 
        
        data.objectIDs.map((data, index) => {
          
      )})
      
    }).catch(err => console.log(err))
  }}, [])

  */