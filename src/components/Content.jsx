import ItemsList from "./ItemsList";

const Content = ({ items, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemsList items={items} handleDelete={handleDelete}/>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </>
  );
};

export default Content;
