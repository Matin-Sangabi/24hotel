import React from "react";
import { Spinner } from "reactstrap";
export default function AppSpinner() {
  return (
    <React.Fragment>
      <Spinner color="primary" className="position-absolute top-50 start-50" />
    </React.Fragment>
  );
}
