import "./CourseGoalItem.css";
import Button from "../../UI/Button/Button";

const CourseGoalItem = (props) => {
  return (
    <li className="goal-item" onClick={(e) => props.deleteItem(e, props.id)}>
      {props.id} {props.text}
    </li>
  );
};

export default CourseGoalItem;
