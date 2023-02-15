function CompanyMenu({ isOpen }) {
  return (
    <ul
      className={`mt-4 ml-4 md:ml-0 ${
        !isOpen.company && 'hidden'
      } md:absolute md:left-0 md:bg-[#fff] md:shadow-lg md:min-w-max md:p-6 md:rounded-2xl`}
    >
      <li className="flex items-center gap-2 mb-4">
        <a href="#todolist">History</a>
      </li>
      <li className="flex items-center gap-2 mb-4 md:min-w-fit">
        <a href="#planning">Our Team</a>
      </li>
      <li className="flex items-center gap-2 mb-4 md:mb-0">
        <a href="#calendar">Blog</a>
      </li>
    </ul>
  );
}

export default CompanyMenu;
