import React from 'react';
import { render } from '@testing-library/react';

import TestLibComponent from './test-lib-component';

describe('TestLibComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestLibComponent />);
    expect(baseElement).toBeTruthy();
  });
});
