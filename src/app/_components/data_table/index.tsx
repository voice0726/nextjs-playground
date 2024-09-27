'use client';

import { useMemo } from 'react';

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { styled } from 'restyle';

type TableProps<TData, TValue = unknown> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

const StyledTable = styled('table', {
  margin: '1rem 0rem',
  borderColor: 'rgb(209 213 219)',
  borderCollapse: 'separate',
  borderSpacing: 0,
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: '0.25rem',
  overflow: 'hidden',
});

const TR = styled('tr', {
  '&+tr td': {
    borderTop: '1px solid rgb(209 213 219)',
  },
});

const TH = styled('th', {
  padding: '0.5rem 1rem',
});

const TD = styled('td', {
  padding: '0.5rem 1rem',
});

const TBODY = styled('tbody', {
  backgroundColor: 'rgb(255 255 255)',
});

const THEAD = styled('thead', {
  backgroundColor: 'rgb(55 65 81)',
  color: 'white',
  fontWeight: 'bold',
});

export const DataTable = <TData, TValue = unknown>({ columns, data }: TableProps<TData, TValue>) => {
  const table = useReactTable<TData>({
    columns: useMemo(() => columns, [columns]),
    data: useMemo(() => data, [data]),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTable>
      <THEAD>
        {table.getHeaderGroups().map((headerGroup) => (
          <TR key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TH key={header.id} colSpan={header.colSpan} rowSpan={header.rowSpan}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TH>
            ))}
          </TR>
        ))}
      </THEAD>
      <TBODY>
        {table.getRowModel().rows.map((row) => (
          <TR key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TD key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TD>
            ))}
          </TR>
        ))}
      </TBODY>
    </StyledTable>
  );
};
