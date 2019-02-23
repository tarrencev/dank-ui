import React from "react";
export default Component => ({ input, meta = {}, ...rest }) => {
  const { valid } = meta;
  return <Component {...input} {...rest} valid={valid} />;
};
