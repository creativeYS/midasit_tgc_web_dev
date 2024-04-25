import React from 'react';

function ChildComponent({message}) {
    const msg = message;
  return (
    <div>
      <h2>자식 컴포넌트</h2>
      <p>{msg}</p>
    </div>
  );
}

export default ChildComponent;