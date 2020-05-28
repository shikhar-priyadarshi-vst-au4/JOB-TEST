import React, { Fragment } from "react";
import ListItem from "./ListItem";

export const List = (props) => {
  return (
    <Fragment>
      {props.comp === "dropdown" && <ListItem comp="dropdown" />}
    </Fragment>
  );
};
