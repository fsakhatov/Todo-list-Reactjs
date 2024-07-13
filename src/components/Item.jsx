import { FaTrashAlt } from "react-icons/fa";

const Item = ({ item, handleDelete }) => {
  return (
    <li className='item'>
      <input type='checkbox' />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => {}}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={ () => handleDelete(item.id)}
        role='button'
        tabIndex='0'
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default Item;
