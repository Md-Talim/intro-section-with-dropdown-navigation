function menuItem({ name, image }) {
  return (
    <li className="flex items-center gap-2 mb-4">
      <img src={image} alt="todo" />
      <a href="#todolist">{name}</a>
    </li>
  );
}

export default menuItem;
