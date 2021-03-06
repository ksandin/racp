import { Box, Pagination, styled, Typography } from "@mui/material";
import { ComponentProps, useEffect, useState } from "react";
import { DataGrid as MuiDataGrid, GridColumns } from "@mui/x-data-grid";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import { GridRenderCellParams } from "@mui/x-data-grid/models/params/gridCellParams";
import { GridEnrichedColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import {
  SearchQuery,
  SearchResult,
  SearchSort,
} from "../../api/services/search/types";
import { typedKeys } from "../../lib/typedKeys";
import { Link } from "./Link";

export function DataGrid<Entity, Filter, Id extends GridRowId>({
  filter,
  query: useQuery,
  columns,
  id,
  link,
  sx,
  ...props
}: ColumnConventionProps<Entity, Id> &
  Omit<ComponentProps<typeof Box>, "id"> & {
    filter?: Filter;
    query: (query: SearchQuery<Entity, Filter>) => {
      data?: SearchResult<Entity>;
      isFetching: boolean;
    };
  }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState<SearchSort<Entity>>([]);
  const { data: result, isFetching } = useQuery({
    filter,
    sort,
    offset: pageIndex * pageSize,
    limit: pageSize,
  });
  const pageCount = Math.ceil((result?.total ?? 0) / pageSize);
  const columnList = processColumnConvention({ columns, id, link });

  useEffect(() => {
    if (pageIndex >= pageCount) {
      setPageIndex(Math.max(0, pageCount - 1));
    }
  }, [pageIndex, pageCount]);

  return (
    <Box
      sx={{ height: "100%", display: "flex", flexDirection: "column", ...sx }}
      {...props}
    >
      <Box sx={{ flex: 1 }}>
        <Grid
          disableColumnFilter
          columns={columnList}
          rows={result?.entities ?? []}
          getRowId={(row) => id(row as Entity)}
          filterMode="server"
          sortingMode="server"
          paginationMode="server"
          autoPageSize={true}
          page={pageIndex}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
          hideFooter
          onSortModelChange={
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setSort as any
          }
          sortModel={
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sort as any
          }
          pagination
          disableSelectionOnClick
          rowCount={result?.total ?? 0}
          loading={isFetching}
        />
      </Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="caption">
          {result && `${result.total} matches`}
        </Typography>
        <Pagination
          page={pageIndex + 1}
          count={pageCount}
          onChange={(e, page) => setPageIndex(page - 1)}
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
}

const Grid = styled(MuiDataGrid)`
  .MuiDataGrid-cell,
  .MuiDataGrid-columnHeader {
    &:focus,
    &:focus-within {
      outline: none;
    }
  }
`;

interface ColumnConventionProps<Entity, Id extends GridRowId> {
  columns: Partial<Record<keyof Entity, string | boolean>>;
  id: (entity: Entity) => Id;
  link?: (id: Id) => { $: string };
}

function processColumnConvention<Entity, Id extends GridRowId>({
  columns,
  id,
  link,
}: ColumnConventionProps<Entity, Id>): GridColumns {
  const [firstColumn, ...restColumns] = typedKeys(columns).map(
    (field): GridEnrichedColDef<Entity> => {
      const value = columns[field];
      return {
        field: String(field),
        headerName: typeof value === "string" ? value : String(field),
      };
    }
  );
  return [
    {
      ...firstColumn,
      width: 180,
      renderCell({ value, row }: GridRenderCellParams) {
        return link ? <Link to={link(id(row))}>{value}</Link> : value;
      },
    },
    ...restColumns.map((column) => ({
      ...column,
      renderCell: ({ value }: GridRenderCellParams) => value ?? "-",
    })),
  ];
}
