import { TableHTMLAttributes } from 'react';

type TableHeadProps = TableHTMLAttributes<HTMLTableSectionElement>;

export function TableHead(props: TableHeadProps) {
  return <thead {...props} />;
}
