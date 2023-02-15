import todo from '../images/icon-todo.svg';
import planning from '../images/icon-planning.svg';
import calender from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';

function FeaturesMenu({ isOpen }) {
  return (
    <ul
      className={`mt-4 ml-4 md:ml-0 ${
        !isOpen.features && 'hidden'
      } md:absolute md:right-0 md:shadow-lg md:min-w-max md:p-6 md:bg-[#fff] md:rounded-2xl`}
    >
      <li className="flex items-center gap-2 mb-4">
        <img src={todo} alt="todo" />
        <a href="#todolist">TodoList</a>
      </li>
      <li className="flex items-center gap-2 mb-4">
        <img src={calender} alt="calender" />
        <a href="#calendar">Calendar</a>
      </li>
      <li className="flex items-center gap-2 mb-4">
        <img src={reminders} alt="reminders" />
        <a href="#reminders">Reminders</a>
      </li>
      <li className="flex items-center gap-2 mb-4 md:mb-0">
        <img src={planning} alt="planning" />
        <a href="#planning">Planning</a>
      </li>
    </ul>
  );
}

export default FeaturesMenu;
