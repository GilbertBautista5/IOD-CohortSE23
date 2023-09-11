function Cat(props) { 
    let type = 'unknown'; 
    if (props.type) type = props.type; 
    
    return (
        <div className="Cat componentBox">
            <h2>Big Cats</h2> <p>Type: {type}</p>

            {props.breed ? <p>Breed: {props.breed}</p> : null}

            {props.colour && <p>Colour: {props.colour}</p>}

        
        </div>
    )
}
export default Cat;