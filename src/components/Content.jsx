import ItemsList from "./ItemsList";

const Content = ({ items }) => {
  return (
    <>
      {items.length ? (
        <ItemsList items={items} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </>
  );
};

export default Content;
