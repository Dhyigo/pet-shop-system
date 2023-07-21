import { TableHTMLAttributes } from 'react';
import { TableProps } from 'react-bootstrap';

export type TableHeaderProps = TableHTMLAttributes<HTMLTableSectionElement>;

export type TableHeadProps = TableHTMLAttributes<HTMLTableSectionElement>;

export type TableRootProps = TableProps;

export type TableRowProps = TableHTMLAttributes<HTMLTableRowElement>;

export interface Data {
  id: number | string;
}

export interface TableCellsProps {
  data: Data & Record<string, any>;
}

export interface TableHeadersProps {
  headers: string[];
}
