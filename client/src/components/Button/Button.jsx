import React, { Fragment } from "react";

export const Button = (props) => {
  return (
    <Fragment>
      {props.comp === "panel-add-button" && (
        <button
          className="button is-small is-success is-right"
          onClick={() => props.appendsurvey()}
        >
          {props.children}
        </button>
      )}
      {props.comp === "panel-remove-button" && (
        <button
          className="button is-small is-warning is-right"
          onClick={() => props.deletesurvey()}
        >
          {props.children}
        </button>
      )}
      {props.comp === "submit-button" && (
        <button
          className="button is-large is-success"
          onClick={() => props.submit()}
        >
          {props.children}
        </button>
      )}
    </Fragment>
  );
};
