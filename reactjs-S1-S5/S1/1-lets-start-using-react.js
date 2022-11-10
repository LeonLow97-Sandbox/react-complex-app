function OurApp() {
    // creating children in div
    return React.createElement("div", null, [
      React.createElement("h1", null, "Our Amazing App Header"),
      React.createElement("p", null, `The current time is ${new Date().toLocaleString()}.`),
      React.createElement("small", null, "Copyright Footer Text")
    ]);
  }
  
  // accessing the HTML DOM of id=app
  const root = ReactDOM.createRoot(document.querySelector("#app"));
  setInterval(function() {
    // Using a function OurApp to create the "h1" element:
    root.render(React.createElement(OurApp))
  }, 1000)
  
  
  // Creating a "h1" heading element in div (id="app")
  // root.render(React.createElement("h1", null, "Our Amazing App Header"))
  
  