
function List(props) {
    return (
      <ul className="List">
        {props.children(props.elements)}
      </ul>
    );
  }
  
  export default List;
  