import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import { useState } from "react";
import Content from "./components/Content";

function App() {
  const [items, setItems] = useState([{
    id: 1, item: 'Milk', checked: false
  }])

   const [item, setItem] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    const newItem = {
      id: items.length + 1,
      item,
      checked: false,
    }
    
     setItems([...items, newItem])
     setItem('')
    }
  return (
    <div className='App'>
      <Header title='Grocery List' />
      <AddItem item={item} setItem={setItem} handleSubmit={handleSubmit} />
      <SearchItem />
      <main>
        <Content items={items}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
