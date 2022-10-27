import React from "react";
import "components/InterviewerListItem.scss";
import classnames from 'classnames';


export default function InterviewerListItem(props) {

  const { selected } = props;

  const interviewerListItemClass = classnames("interviewers__item",{
    "interviewers__item--selected": selected,

  })
  return (
    <li className={interviewerListItemClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );

}