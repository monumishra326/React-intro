import "./App.css";

function App() {
  const comapanies = ["Android", "Blackberry", "Iphone", "Windows phone"];
  const company = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div>
      <h1 className="head">REACT MOBILE OS</h1>

      <ul>
        <h1>Mobile operating system</h1>
        
        {comapanies.map((e) => (
          <li className="text1">{e}</li>
        ))}
      </ul>
      <br />
      <ul>
        <h1>Mobile Manufacturer</h1>
        {company.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
  
}



export default App;