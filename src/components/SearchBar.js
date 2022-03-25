
import React, { useEffect, useState } from 'react'

// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function SearchBar({patientList,handlePatientIdChange ,patientId}) {


    

      const [searchText, setSearchText] = useState("");
      const [suggest, setSuggest] = useState([]);
      const[patientName, setPatientName]= useState([])

      useEffect(()=>{
          let patientNameList = patientList.map((patient)=>
              patient.patientName)
          setPatientName(patientNameList)
          
      },[])

      const handleChange = (e) => {
       
      let searchValue = e.target.value; 
      let suggestion = []; 
      if(searchValue.length>0){
        suggestion = patientList
        .filter((patient)=> patient.patientName.toLowerCase().includes(searchValue.toLowerCase()))
        
      }
      setSuggest(suggestion)
      console.log(suggestion)
      setSearchText(searchValue)
    //   handlePatientIdChange()
    }
      

      const getSuggestions = () => {
        if(suggest.length===0&&searchText!==""){
          return <p>Search content not found</p>
        }
        return (
          <ul>
            {suggest.map((item,index)=> {
              return(
                <div key={index}>
                  <li className='patientList'>{item}</li>
                  
                </div>
              )
            })}

          </ul>
        )
      }

      
      

  return (
    <div className='searchContainer'>
      <input 
      placeholder='search' 
      type='text'
      onChange={handleChange}
      className='search'/>
      {getSuggestions()}
    
  </div>
  )
}

export default SearchBar