import { MantineRadius, MantineSize, TextInput } from '@mantine/core';
import { VARIANT } from 'constants/enum';

import classes from './TextField.module.css';

interface Props {
  required?: boolean;
  width?: number;
  variant?: keyof typeof VARIANT;
  size?: MantineSize;
  radius?: MantineRadius;
  label?: string;
  description?: string;
  error?: string;
  withAsterisk?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField(props: Props) {
  return (
    <TextInput
      {...props}
      classNames={{
        input: classes.input,
        label: classes.label,
      }}
    />
  );
}
