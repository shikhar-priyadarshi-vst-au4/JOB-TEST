import React, { Fragment } from "react";

export const Button = (props) => {
  return (
    <Fragment>
      {props.comp === "panel-add-button" && (
        <button class="button is-small is-success is-right">
          {props.children}
        </button>
      )}
      {props.comp === "panel-remove-button" && (
        <button class="button is-small is-warning is-right">
          {props.children}
        </button>
      )}
    </Fragment>
  );
};
