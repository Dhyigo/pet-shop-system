// Refatorar depois
import { TableHTMLAttributes } from 'react';

type TableRowProps = TableHTMLAttributes<HTMLTableRowElement>;

export function TableRow(props: TableRowProps) {
  return <tr {...props} />;
}
