import { useState } from "react";

function AddBigCatForm({ onAddBigCat }) {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    onAddBigCat(Object.fromEntries(formData.entries()));
  };
  return (
    <div className="AddBigCatForm componentBox">
      <form onSubmit={handleSubmit}>

        <label>
          Name:
          <input
            name="name"
          />
        </label>

        <label>
          Latin Name:
          <input
            latinName="latinName"
          />
        </label>

        <button>Add Cat</button>
      </form>
    </div>
  );
}

function BigCat({name, latinName}) {
    return (
    <li>
      <strong>{name}</strong> <em>{latinName}</em></li>
    )
};


function BigCatsList() {

  const BigCats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];


  const [currentBigCats, setCurrentBigCats] = useState(BigCats);

  const BigCatsItem = currentBigCats.map((BigCats) => (
    <BigCat
      key={BigCats.id}
      name={BigCats.name}
      latinName={BigCats.latinName}
    />
  ));

  const handleReverseBigCats = () => {
    
    let newBigCats = [...currentBigCats];
    newBigCats.reverse(); 
    setCurrentBigCats(newBigCats); 
  };

  const handleSortBigCatsName = () => {
  
    let newBigCats = [...currentBigCats];
    newBigCats.sort((BigCats1, BigCats2) => {
      if (BigCats1.name == BigCats2.name) return 0; 
      else if (BigCats1.name > BigCats2.name) return 1;
      else return -1;
    });

    setCurrentBigCats(newBigCats); 
  };

  
  const handleAddBigCats = (newBigCats) => {
    newBigCats.id = currentBigCats.length + 1; 
    setCurrentBigCats([...currentBigCats, newBigCats]);
  };

  return (
    <> <AddBigCatForm onAddBigCat={handleAddBigCats}/>
    <div className="BigCatsList componentBox">
      <ul> {BigCatsItem} </ul>
      <button onClick={handleReverseBigCats}>Reverse List</button>
      <button onClick={handleSortBigCatsName}>Sort by Name List</button>
      <button onClick={handleAddBigCats}>Add Big Cat</button>
    </div>
    </>
  );
}


export default BigCatsList;
