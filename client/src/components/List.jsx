import React, { Fragment } from "react";
import ListItem from "./ListItem";

export const List = (props) => {
  return (
    <Fragment>
      {props.comp === "dropdown" && <ListItem comp="dropdown" />}
      {props.comp === "panel" && (
        <Fragment>
          <div className="columns">
            {["Survey List", "Assigned Surveys"].map((value, index) => (
              <div className={`column`} key={index}>
                <p className={"is-size-4"}>{value}</p>
                <div className={"control has-icons-right"}>
                  <input
                    type={"text"}
                    className={"input"}
                    placeholder={"Search"}
                  />
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
