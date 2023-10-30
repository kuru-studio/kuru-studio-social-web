const Visibility = ({ state,children }) => {
  return (
    <>
      { state ? children : null }
    </>
  );
}

export default Visibility;
