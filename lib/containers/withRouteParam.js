/**
 * Pass a route param to its child
 */
import React from "react";
export const withRouteParam = fieldName => Component => {
  const Wrapper = props => (
    <Component
      {...props}
      {...{
        [fieldName]:
          props[fieldName] ||
          (props.match && props.match.params && props.match.params[fieldName]) ||
          undefined
      }}
    />
  );
  Wrapper.displayName = `withRouteParam(${fieldName})`;
  return Wrapper;
};
export default withRouteParam;
