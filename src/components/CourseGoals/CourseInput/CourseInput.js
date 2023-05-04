import "./CourseInput.css";
import React, { useState } from "react";
import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  return (
    <form>
      <div className="form-control">
        <label id="label">Course Goal</label>
        <input type="text" id="title" onChange={(e) => props.activeInputTitle(e)} />
      </div>
      <Button type="submit" func={props.addItem} />
    </form>
  );
};

export default CourseInput;
