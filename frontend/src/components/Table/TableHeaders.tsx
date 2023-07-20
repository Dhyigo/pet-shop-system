interface TableHeadersProps {
  headers: string[];
}

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
