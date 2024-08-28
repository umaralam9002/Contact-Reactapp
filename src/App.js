import { useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
function App() {

   const Data_Url = 'https://contactdata-9ea78-default-rtdb.firebaseio.com/data.json'
  const [data, setdata] = useState([])

  const catchData = (data)=>{
    // console.log('Data is here');
    console.log(data);
    setdata(data);
  }

  const sendData = async(data)=>{
    console.log(data);
    const newData = {
      name:data.name,
      number:data.number,
    }
   const response = await fetch(Data_Url,{
      method: 'POST',
      body:JSON.stringify(newData),
      headers:{
        'Content-Type' : 'application/json',
      }
    });
    const result = await response.json();
    console.log(result);
  }
  return (
    <>
    <AddContact passData={catchData}/>
    <ContactForm AddContact={sendData}/>
    <ContactList data={data}/>
    </>
  );
}

export default App;
