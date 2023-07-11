/* eslint-disable jsx-a11y/label-has-associated-control */
import { LabelHTMLAttributes } from 'react';

export function FormLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} />;
}
