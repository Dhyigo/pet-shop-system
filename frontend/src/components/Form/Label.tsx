/* eslint-disable jsx-a11y/label-has-associated-control */
import { LabelHTMLAttributes } from 'react';

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} />;
}
