import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicExample from "../src/components/card"
import SpinnerRound from './components/spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/navbar'
import ErrorModal from './components/errorModal'


function App() {


  async function getData() {

    try {
      const data = await fetch('https://dummyjson.com/products')
      const response = await data.json()
      //      console.log(response.products[0].id);
      setgetUsers(response.products)

    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  const [getusers, setgetUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  console.log(getusers)

  return (
    <>
      {getusers && <MainNavbar />}
      {loading && <SpinnerRound />}
      {
        getusers && getusers.map(
          item => {

            return   (
              <div class="d-inline-flex">
                <div className=''>
                <BasicExample  item={item}/>

                </div>
              </div>
            )
          })
      }

      {error && <ErrorModal/>
      }
    </>
  )
}

export default App
