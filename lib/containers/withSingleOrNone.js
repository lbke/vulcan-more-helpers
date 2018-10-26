/**
 * Wrap the Component with withSingle only if documentId is set
 * @param {*} fieldName
 */
import React from "react";
import { withSingle } from "meteor/vulcan:core";
const withSingleOrNone = options => Component => {
  const Wrapper = props => {
    let WrappedComponent = Component;
    if (props.documentId) {
      WrappedComponent = withSingle(options)(Component);
    }
    return <WrappedComponent {...props} />;
  };
  Wrapper.displayName = `withSingleOrNone(${Component.displayName})`;
  return Wrapper;
};
export default withSingleOrNone;
