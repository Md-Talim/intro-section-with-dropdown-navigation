const Button = (props) => {
  const bordered = `text-center md:px-5 py-2 rounded-xl border-2 border-gray hover:border-black cursor-pointer hover:text-black`;
  const unbordered = 'text-center md:px-10 py-2 hover:text-black cursor-pointer';

  return (
    <div className={`${props.bordered ? bordered : unbordered}`}>
      {props.name}
    </div>
  );
};

export default Button;
