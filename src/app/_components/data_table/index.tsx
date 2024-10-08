'use client';

import { useMemo } from 'react';

import { styled } from '@linaria/react';
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type TableProps<TData, TValue = unknown> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

const StyledTable = styled.table`
  margin: 1rem 0;
  border-color: rgb(209 213 219);
  border-collapse: separate;
  border-spacing: 0;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const Tr = styled.tr`
  & + tr td {
    border-top: 1px solid rgb(209 213 219);
  }
`;

const Th = styled.th`
  padding: 0.5rem 1rem;
`;

const Td = styled.td`
  padding: 0.5rem 1rem;
`;

const TBody = styled.tbody`
  background-color: rgb(255 255 255);
`;

const THead = styled.thead`
  background-color: rgb(55 65 81);
  color: white;
  font-weight: bold;
`;

export const DataTable = <TData, TValue = unknown>({
  columns,
  data,
}: TableProps<TData, TValue>) => {
  const table = useReactTable<TData>({
    columns: useMemo(() => columns, [columns]),
    data: useMemo(() => data, [data]),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTable>
      <THead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th
                key={header.id}
                colSpan={header.colSpan}
                rowSpan={header.rowSpan}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </Th>
            ))}
          </Tr>
        ))}
      </THead>
      <TBody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </TBody>
    </StyledTable>
  );
};
