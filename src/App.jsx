import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Content from "./components/Content";

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([{
    id: 1, item: 'Milk', checked: false,
  },{
    id: 2, item: 'Bread', checked: false,
  }
]);

const [filter, setFilter] = useState('');

   const [item, setItem] = useState('');
   const [updateLoading, setUpdateLoading] = useState(null);

   const base_url = 'http://localhost:3000';

   useEffect( () => {
    async function fetchItems() {
      const response = await fetch(`${base_url}/items`);
      const fetchedItems = await response.json();
      setItems(fetchedItems)
    }
    fetchItems()
   }, [])

  function handleSubmit(e){
    e.preventDefault();

    const newItem = {
      id: items.length + 1,
      item,
      checked: false,
    }
    
     setItems([...items, newItem])
     setItem('')
     
     async function handleCheck(id){
     setUpdateLoading(true)

     
    }
    
  }
  function handleDelete(id){
   const filteredItems = items.filter(item => item.id != id)
   setItems(filteredItems)
  }
  return (
    <div className='App'>
      <Header title='Grocery List' />
      <AddItem item={item} setItem={setItem} handleSubmit={handleSubmit} />
      <SearchItem
      filter={filter}
      setFilter={setFilter}
      search={search}
      setSearch={setSearch}
      />
      
      <main>
        <Content 
        items={items.filter((item) => 
          item.item.toLowerCase().includes(search.toLowerCase()))}
          handleDelete={handleDelete}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
