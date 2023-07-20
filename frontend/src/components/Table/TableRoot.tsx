import { Table, TableProps } from 'react-bootstrap';

type TableRootProps = TableProps;

export function TableRoot(props: TableRootProps) {
  return <Table {...props} />;
}
