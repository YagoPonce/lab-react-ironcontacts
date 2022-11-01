import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts"
function App() {
                          //iteración 1
  const contacts = contactsArr.slice(0,5)
  const [personList, setPersonList] = useState(contacts)

                           //iteracion 3
                         //intento de hacer un map dentro de un filter. no sale.
// const randomPerson = () => {
// const filteredPerson = contactsArr.filter((eachPerson) => {
//   if (eachPerson.id === personList.map((eachId) => eachId.id)) {
//     return true
//   } else {
//     return false
//   }
// })
// const randomNum = Math.floor(Math.random() * filteredPerson.length)
// return setPersonList(filteredPerson[randomNum])
// }

const randomPerson = () => {
  const copyPersonList = personList.map((eachElement) => eachElement)
  const randomNum = Math.floor(Math.random() * contactsArr.length)
  const newContact = contactsArr[randomNum]
  copyPersonList.push(newContact)
  return setPersonList(copyPersonList)
}


                            //iteración 4
  const orderedByPopularity = () => {
    const copyPersonList = personList.map((eachElement) => eachElement)
    copyPersonList.sort((elem1, elem2) => {
      if  (elem1.popularity > elem2.popularity) {
        return -1
    } else {
        return 1
    }
    })
    setPersonList(copyPersonList)

  }

  const orderedByName = () => {
    const copyPersonList = personList.map((eachElement) => eachElement)
    copyPersonList.sort((elem1, elem2) => {
      if  (elem1.name > elem2.name) {
        return 1
    } else {
        return -1
    }
    })
    setPersonList(copyPersonList)
  }

  return (
  
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={randomPerson}>Add Random Contact</button>
    <button onClick={orderedByPopularity}>Sort by popularity </button>
    <button onClick={orderedByName}>Sort by name</button>
      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        </thead>
{personList.map((eachPerson) => {
    return (
      <tbody>
      <tr> 
      <td><img src={eachPerson.pictureUrl} atl="celebrity" class="actorImg"/></td>
      <td>{eachPerson.name}</td>
      <td>{eachPerson.popularity.toFixed(2)}</td>
      <td>{eachPerson.wonOscar === true && "🏆"}</td>
      <td>{eachPerson.wonEmmy === true && "🏆"}</td>
    </tr>
    </tbody>

   
      )
    })}

      </table>





    </div>
  )
}

export default App;
