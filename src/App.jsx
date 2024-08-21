import { useEffect, useState } from 'react'
import './App.css'
// import Example from './components/Example'
import UsersByGender from './components/UsersByGender'
import UsersByInterval from './components/UsersByInterval'

function App() {
  const URL = 'https://randomuser.me/api/?results=25'
  const [dataUsers, setDataUsers] = useState()
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setDataUsers(data.results)
      })
  }, [URL])
  

  return (
    <main>
      {dataUsers && <UsersByGender dataUsers={dataUsers} /> }
      {dataUsers && <UsersByInterval dataUsers={dataUsers} /> }
    </main>
  )
}

export default App
