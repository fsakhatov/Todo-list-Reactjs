import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({handleSubmit, item, setItem}) => {
  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button type='submit' aria-label='Add Item'>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
