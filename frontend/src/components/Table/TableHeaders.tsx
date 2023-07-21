import { TableHeadersProps } from '../../models/components/Table';

export function TableHeaders({ headers }: TableHeadersProps) {
  return (
    <>
      {headers.map((header) => (
        <th key={header} scope="col">
          {header}
        </th>
      ))}
    </>
  );
}
