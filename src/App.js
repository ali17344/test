import axios from 'axios';
import {  useEffect, useState } from 'react';
import Info from './Info';
import  './style.css';
function App() {
  const [data, setData] = useState([]);
   useEffect(() => {
     const get_info =  () => {
       axios('https://grazy.pythonanywhere.com/test/')
       .then(({data}) => {setData(data)})
     };
     get_info()
   },[])

 

  return (
    <div className="App">
        <Info data={data} />
    </div>
  );
}

export default App;
