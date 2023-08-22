function Adress({streetAdress, suburb, state, postcode, country="Australia"}) {

    return (
        <div className="Adress componentBox">
            <div>Adress: {streetAdress}</div>
            <div>{suburb}, {state}, {postcode}</div>
            <div>{country}</div>

        </div>
    )

}

export default Adress