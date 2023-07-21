import { Table } from 'react-bootstrap';
import { TableRootProps } from '../../models/components/Table';

export function TableRoot(props: TableRootProps) {
  return <Table {...props} />;
}
