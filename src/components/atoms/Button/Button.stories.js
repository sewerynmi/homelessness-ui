import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Standard', () => <Button text="Standard Button" />)
  .add('Secondary', () => <Button secondary text="Secondary Button" />);
