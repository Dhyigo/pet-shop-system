import { TableHTMLAttributes } from 'react';

type TableHeaderProps = TableHTMLAttributes<HTMLTableSectionElement>;

export function TableBody(props: TableHeaderProps) {
  return <tbody {...props} />;
}
