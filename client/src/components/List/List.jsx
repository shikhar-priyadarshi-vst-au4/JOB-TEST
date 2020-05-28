import React, { Fragment } from "react";
import ListItem from "./ListItem";
import Input from "../Input";
const styled = {
  panelContainer: {
    height: "170px",
    overflowY: "scroll",
  },
};
export const List = (props) => {
  return (
    <Fragment>
      {props.comp === "dropdown" && <ListItem comp="dropdown" />}
      {props.comp === "panel" && (
        <Fragment>
          <div className="columns">
            {["Survey List", "Assigned Surveys"].map((value, index) => (
              <div className={`column`} key={index}>
                <p className={"is-size-4 has-text-centered"}>{value}</p>
                <div className="panel" style={styled.panelContainer}>
                  <Input comp={"panel"} />
                  <ListItem comp={"panel"} />
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
