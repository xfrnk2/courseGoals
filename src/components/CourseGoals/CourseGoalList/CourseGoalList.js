import "./CourseGoalList.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((element) => (
        <CourseGoalItem id={element.id} text={element.text} deleteItem={props.deleteItem} />
      ))}
    </ul>
  );
};

export default CourseGoalList;
