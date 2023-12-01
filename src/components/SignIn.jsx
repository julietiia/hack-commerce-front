import React from "react";

function SignIn() {
  return (
    <>
      {[ 'start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default SignIn;