function OurApp() {
    // creating children in div
    return (
      // JSX: syntax extension to JavaScript (looks like HTML but it's not!)
      // <> is a React fragment, don't need "div".
      <>
        <OurHeader />
        <TimeArea />
        <ul>
          <Pet name="Poocher" species="cat" age="5" />
          <Pet name="Tristan" species="dog" age="2" />
          <Pet name="Fluffy" species="rabbit" age="3" />
        </ul>
        <Footer />
      </>
    );
  }
  
  function Pet(props) {
    return <li>{props.name} is a {props.species} and is {props.age} years old.</li>
  }
  
  function Footer() {
    return <small>Copyright Footer Text</small>
  }
  
  function TimeArea() {
    return <p>The current time is {new Date().toLocaleString()}.</p>
  }
  
  function OurHeader() {
    return <h1 className="special">Our Amazing App Header</h1>
  }
  
  // accessing the HTML DOM of id=app
  const root = ReactDOM.createRoot(document.querySelector("#app"));
  setInterval(function() {
    // Using a function OurApp to create the elements (JSX):
    root.render(<OurApp />)
  }, 1000)
  
  
  // Creating a "h1" heading element in div (id="app")
  // root.render(React.createElement("h1", null, "Our Amazing App Header"))
  