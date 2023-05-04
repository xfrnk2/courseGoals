import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseGoalItem from "./components/CourseGoals/CourseGoalItem/CourseGoalItem";

import "./App.css";

const App = () => {
  const [courseGoalNum, setCourseGoalNum] = useState(3);
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  function addItem(e) {
    e.preventDefault();
    const titleText = document.querySelector("#title").value.trim();
    if (!titleText) {
      // 빨강
      const label = document.querySelector("#label");
      label.style.color = "red";
    } else {
      setCourseGoals([{ text: titleText, id: "g" + courseGoalNum }, ...courseGoals]);
      setCourseGoalNum(courseGoalNum + 1);
    }
  }

  function deleteItem(e, id) {
    e.preventDefault();
    setCourseGoals((prev) => prev.filter((courseGoal) => courseGoal.id != id));
  }

  function activeInputTitle(e) {
    e.preventDefault();
    const label = document.querySelector("#label");
    if (e.target.value.trim()) {
      // 검정
      label.style.color = "black";
    }
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput addItem={addItem} activeInputTitle={activeInputTitle} />
      </section>
      <section id="goals">
        <CourseGoalList items={courseGoals} deleteItem={deleteItem} />
      </section>
    </div>
  );
};

export default App;
