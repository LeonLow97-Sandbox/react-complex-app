const useState = React.useState
const useEffect = React.useEffect

function OurApp() {
  const [pets, setPets] = useState([])
  
  // only run once the first time this component is rendered (load existing data from local storage)
  // only if the data exists, we will load it.
  // [] means it will run only once when the browser first loads.
  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
      // need to parse it so it becomes an Array of JavaScript
      setPets(JSON.parse(localStorage.getItem("examplePetData")))
    }
  }, [])
  
  // run everytime our pet state changes (save pet state in browser local storage)
  // whenever pet changes, it saves.
  // local storage only accepts a string of text
  // setItem(keyName, keyValue): when passed a key name and value, will add that key
  // to the storage object, or update the key's value if it already exists.
  // keyName: A string containing the name of the key you want to create/update.
  // keyValue: A string containing the value you want to give the key you are creating/updating.
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets))
  }, [pets])
  
  return (
    <>
      <OurHeader />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map(pet => <Pet setPets={setPets} id={pet.id} name={pet.name} species={pet.species} age={pet.age} key={pet.id} />)}
      </ul>
      <Footer />
    </>
  )
}

function AddPetForm(props) {
  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [age, setAge] = useState()
  
  function handleSubmit(e) {
    e.preventDefault()
    props.setPets(prev => prev.concat({name, species, age, id: Date.now()}))
    setName("")
    setSpecies("")
    setAge("")
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="species" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0)
  
  function increaseLikeHandler() {
    setLikeCount(function(prev) {
      return prev + 1
    })
  }
  
  function decreaseLikeHandler() {
    setLikeCount(prev => {
      if (prev > 0) {
        return prev - 1
      }
      return 0
    })
  }
  
  return (
    <>
      <button onClick={increaseLikeHandler}>Increase likes</button>
      <button onClick={decreaseLikeHandler}>Decrease likes</button>
      <h2>This page has been liked {likeCount} times.</h2>
    </>
  )
}

function Pet(props) {
  function handleDelete() {
    // filter(function): if return True, item included in Array, otherwise skip.
    // returns a True value for items that are not equal. 
    // props.id: the pet that just got clicked on. 
    props.setPets(prev => prev.filter(pet => pet.id != props.id))
  }
  
  return (
    <li>{props.name} is a {props.species} and is {props.age} years old.
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

function Footer() {
  return <small>Copyright Footer Text</small>
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString())
  
  useEffect(() => {
    const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
    
    // clearInterval() method clears a timer set with the setInterval() method.
    // say you want to navigate to another page without the timer, remove the timer effects to
    // save computer resources.
    return () => clearInterval(interval)
  }, [])
  
  return <p>The current time is {theTime}.</p>
}

function OurHeader() {
  return <h1 className="special">Our Amazing App Header</h1>
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<OurApp />)