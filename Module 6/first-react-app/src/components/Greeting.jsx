function NamePart(props) {
    return (
      // reusable component to display part of a name from the value prop
      <span className="NamePart">{props.value}</span>
    );
  }
  function Greeting(props) {
    return (
      // composes the NamePart component to display a full name
      <div className="FullName componentBox">
        Hello World: <NamePart value={props.first} />  <NamePart value={props.last} />
      </div>
    );
  }
  
  export default Greeting