import { TableCellsProps } from '../../models/components/Table';

export function TableCells({ data }: TableCellsProps) {
  const { id: dataId, ...dataRest } = data;

  return (
    <>
      <th scope="row">{dataId}</th>

      {Object.entries(dataRest).map(([key, value]) => (
        <td key={`${dataId}-${key}`}>{value}</td>
      ))}
    </>
  );
}
