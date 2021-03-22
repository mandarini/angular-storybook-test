import React from 'react';
import { TestLibComponent, TestLibComponentProps } from './test-lib-component';

export default {
  component: TestLibComponent,
  title: 'TestLibComponent',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TestLibComponentProps = {};

  return <TestLibComponent />;
};
