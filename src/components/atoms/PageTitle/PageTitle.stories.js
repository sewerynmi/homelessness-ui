import React from 'react';
import { storiesOf } from '@storybook/react';
import PageTitle from './PageTitle';

import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Atoms/Page Title', module)
  .addDecorator(withKnobs)
  .add('Standard', () => <PageTitle>Find out where to get the right advice</PageTitle>);
