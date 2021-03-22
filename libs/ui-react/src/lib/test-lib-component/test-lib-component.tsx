import React from 'react';

import './test-lib-component.module.css';

/* eslint-disable-next-line */
export interface TestLibComponentProps {}

export function TestLibComponent(props: TestLibComponentProps) {
  return (
    <div>
      <h1>Welcome to test-lib-component!</h1>
    </div>
  );
}

export default TestLibComponent;
