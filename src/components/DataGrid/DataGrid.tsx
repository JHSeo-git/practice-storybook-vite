import { createTheme, ThemeProvider } from '@mui/material';
import MuiCheckbox from '@mui/material/Checkbox';
import usePagination from '@mui/material/usePagination';
import * as MuiDataGrid from '@mui/x-data-grid';
import {
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MinusSquare,
  MoreHorizontal,
  Square,
} from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';
import { $scale, $semantic } from '@/styles/vars';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import EmptyIcon from './EmptyIcon';

const PAGE_SIZE_LIST = [10, 25, 50];
const DEFAULT_PAGE_SIZE = PAGE_SIZE_LIST[0];

const theme = createTheme({
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    grey: {
      '50': $scale.color.gray3,
      '100': $scale.color.gray4,
      '200': $scale.color.gray5,
      '300': $scale.color.gray6,
      '400': $scale.color.gray7,
      '500': $scale.color.gray8,
      '600': $scale.color.gray9,
      '700': $scale.color.gray10,
      '800': $scale.color.gray11,
      '900': $scale.color.gray12,
    },
    primary: {
      main: $semantic.color.primary9,
      contrastText: $semantic.color.primary12,
      '50': $semantic.color.primary3,
      '100': $semantic.color.primary4,
      '200': $semantic.color.primary5,
      '300': $semantic.color.primary6,
      '400': $semantic.color.primary7,
      '500': $semantic.color.primary8,
      '600': $semantic.color.primary9,
      '700': $semantic.color.primary10,
      '800': $semantic.color.primary11,
      '900': $semantic.color.primary12,
    },
    info: {
      main: $semantic.color.info,
      contrastText: $semantic.color.infoForeground,
      '50': $scale.color.blue3,
      '100': $scale.color.blue4,
      '200': $scale.color.blue5,
      '300': $scale.color.blue6,
      '400': $scale.color.blue7,
      '500': $scale.color.blue8,
      '600': $scale.color.blue9,
      '700': $scale.color.blue10,
      '800': $scale.color.blue11,
      '900': $scale.color.blue12,
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...$semantic.typography.label4Regular,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ...$semantic.typography.label4Regular,
        },
        input: {
          ...$semantic.typography.label4Regular,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          ...$semantic.typography.label4Regular,
        },
      },
    },
  },
});

interface DataGridProps extends MuiDataGrid.DataGridProps {
  /**
   * Set of columns of type GridColumns.
   * @type array
   */
  columns: MuiDataGrid.DataGridProps['columns'];
  /**
   * Set of rows of type GridRowsProp.
   * @type Array<object>
   */
  rows: MuiDataGrid.DataGridProps['rows'];
  /**
   * If `true`, the grid height is dynamic and follow the number of rows in the grid.
   * @default false
   */
  autoHeight?: MuiDataGrid.DataGridProps['autoHeight'];
  /**
   * If `true`, the pageSize is calculated according to the container size and the max number of rows to avoid rendering a vertical scroll bar.
   * @default false
   */
  autoPageSize?: MuiDataGrid.DataGridProps['autoPageSize'];
  /**
   * If `true`, the grid get a first column with a checkbox that allows to select rows.
   * @default false
   */
  checkboxSelection?: MuiDataGrid.DataGridProps['checkboxSelection'];
  /**
   * Override or extend the styles applied to the component. See [CSS API](https://mui.com/x/api/data-grid/data-grid/#css) below for more details.
   */
  classes?: MuiDataGrid.DataGridProps['classes'];
  /**
   * Set the density of the grid.
   * @type "standard" | "comfortable" | "compact"
   * @default "standard"
   */
  density?: MuiDataGrid.DataGridProps['density'];
  /**
   * If `true`, column filters are disabled.
   * @default false
   */
  disableColumnFilter?: MuiDataGrid.DataGridProps['disableColumnFilter'];
  /**
   * If `true`, the column menu is disabled.
   * @default false
   */
  disableColumnMenu?: MuiDataGrid.DataGridProps['disableColumnMenu'];
  /**
   * If `true`, hiding/showing columns is disabled.
   * @default false
   */
  disableColumnSelector?: MuiDataGrid.DataGridProps['disableColumnSelector'];
  /**
   * If `true`, the density selector is disabled.
   * @default false
   */
  disableDensitySelector?: MuiDataGrid.DataGridProps['disableDensitySelector'];
  /**
   * If `true`, rows will not be extended to fill the full width of the grid container.
   * @default false
   */
  disableExtendRowFullWidth?: MuiDataGrid.DataGridProps['disableExtendRowFullWidth'];
  /**
   * If `true`, modification to a cell will not be discarded if the mode is changed from "edit" to "view" while processing props.
   * @default false
   */
  disableIgnoreModificationsIfProcessingProps?: MuiDataGrid.DataGridProps['disableIgnoreModificationsIfProcessingProps'];
  /**
   * If `true`, the selection on click on a row or cell is disabled.
   * @default false
   */
  disableSelectionOnClick?: MuiDataGrid.DataGridProps['disableSelectionOnClick'];
  /**
   * If `true`, the select checkbox is unvisible in column header.
   * @default false
   */
  disableSelectAllCheckbox?: boolean;
  /**
   * If true, the virtualization is disabled.
   * @default false
   */
  disableVirtualization?: MuiDataGrid.DataGridProps['disableVirtualization'];
  /**
   * Controls whether to use the cell or row editing.
   * @type "cell" | "row"
   * @default "cell"
   */
  editMode?: MuiDataGrid.DataGridProps['editMode'];
  /**
   * Set the edit rows model of the grid.
   * @type object
   */
  editRowsModel?: MuiDataGrid.DataGridProps['editRowsModel'];
  /**
   * Filtering can be processed on the server or client-side. Set it to 'server' if you would like to handle filtering on the server-side.
   * @type "client" | "server"
   * @default "client"
   */
  filterMode?: MuiDataGrid.DataGridProps['filterMode'];
  /**
   * Set the filter model of the grid.
   * @type { items: Array<{ columnField: string, id?: number | string, operatorValue?: string, value?: any }>, linkOperator?: 'and' | 'or', quickFilterLogicOperator?: 'and' | 'or', quickFilterValues?: array }
   */
  filterModel?: MuiDataGrid.DataGridProps['filterModel'];
  /**
   * Function that applies CSS classes dynamically on cells.
   * @type function(params: GridCellParams) => string
   * @param {GridCellParams} params With all properties from [GridCellParams](https://mui.com/x/api/data-grid/grid-cell-params/)
   * @returns {string} The CSS class to apply to the cell.
   */
  getCellClassName?: MuiDataGrid.DataGridProps['getCellClassName'];
  /**
   * Function that returns the element to render in row detail.
   * @type function(params: GridRowParams) => JSX.Element
   * @param {GridRowParams} params With all properties from [GridRowParams](https://mui.com/x/api/data-grid/grid-row-params/)
   * @returns {JSX.Element} The row detail element.
   */
  getDetailPanelContent?: MuiDataGrid.DataGridProps['getDetailPanelContent'];
  /**
   * Function that returns the estimated height for a row. Only works if dynamic row height is used. Once the row height is measured this value is discarded.
   * @type function(params: GridRowHeightParams) => number | null
   * @param {GridRowHeightParams} params With all properties from GridRowHeightParams
   * @returns {number | null} The estimated row height value. If `null` or `undefined` then the default row height, based on the density, is applied.
   */
  getEstimatedRowHeight?: MuiDataGrid.DataGridProps['getEstimatedRowHeight'];
  /**
   * Function that applies CSS classes dynamically on rows.
   * @type function(params: GridRowClassNameParams) => string
   * @param {GridRowClassNameParams} params With all properties from [GridRowClassNameParams](https://mui.com/x/api/data-grid/grid-row-class-name-params/)
   * @returns {string} The CSS class to apply to the row.
   */
  getRowClassName?: MuiDataGrid.DataGridProps['getRowClassName'];
  /**
   * Function that sets the row height per row.
   * @type function(params: GridRowHeightParams) => GridRowHeightReturnValue
   * @param {GridRowHeightParams} params With all properties from GridRowHeightParams.
   * @returns {GridRowHeightReturnValue} The row height value. If `null` or `undefined` then the default row height is applied. If "auto" then the row height is calculated based on the content.
   */
  getRowHeight?: MuiDataGrid.DataGridProps['getRowHeight'];
  /**
   * Return the id of a given GridRowModel.
   */
  getRowId?: MuiDataGrid.DataGridProps['getRowId'];
  /**
   * Function that allows to specify the spacing between rows.
   * @type function(params: GridRowSpacingParams) => GridRowSpacing
   * @param {GridRowSpacingParams} params With all properties from [GridRowSpacingParams](https://mui.com/x/api/data-grid/grid-row-spacing-params/).
   * @returns {GridRowSpacing} The row spacing values.
   */
  getRowSpacing?: MuiDataGrid.DataGridProps['getRowSpacing'];
  /**
   * Set the height in pixel of the column headers in the grid.
   * @default 40
   */
  headerHeight?: MuiDataGrid.DataGridProps['headerHeight'];
  /**
   * If `true`, the footer component is hidden.
   * @default false
   */
  hideFooter?: MuiDataGrid.DataGridProps['hideFooter'];
  /**
   * If `true`, the pagination component in the footer is hidden.
   * @default false
   */
  hideFooterPagination?: MuiDataGrid.DataGridProps['hideFooterPagination'];
  /**
   * If `true`, the selected row count in the footer is hidden.
   * @default false
   */
  hideFooterSelectedRowCount?: MuiDataGrid.DataGridProps['hideFooterSelectedRowCount'];
  /**
   * The initial state of the DataGrid. The data in it will be set in the state on initialization but will not be controlled. If one of the data in `initialState` is also being controlled, then the control state wins.
   */
  initialState?: MuiDataGrid.DataGridProps['initialState'];
  /**
   * Callback fired when a cell is rendered, returns true if the cell is editable.
   * @type function(params: GridCellParams) => boolean
   * @param {GridCellParams} params With all properties from [GridCellParams](https://mui.com/x/api/data-grid/grid-cell-params/)
   * @returns {boolean} A boolean indicating if the cell is editable.
   */
  isCellEditable?: MuiDataGrid.DataGridProps['isCellEditable'];
  /**
   * Determines if a row can be selected.
   * @type function(params: GridRowParams) => boolean
   * @param {GridRowParams} params With all properties from [GridRowParams](https://mui.com/x/api/data-grid/grid-row-params/)
   * @returns {boolean} A boolean indicating if the row is selectable.
   */
  isRowSelectable?: MuiDataGrid.DataGridProps['isRowSelectable'];
  /**
   * If `true`, the selection model will retain selected rows that do not exist. Useful when using server side pagination and row selections need to be retained when changing pages.
   * @default false
   */
  keepNonExistentRowsSelected?: MuiDataGrid.DataGridProps['keepNonExistentRowsSelected'];
  /**
   * If `true`, a loading overlay is displayed.
   */
  loading?: MuiDataGrid.DataGridProps['loading'];
  /**
   * Set the locale text of the grid. You can find all the translation keys supported in [the source](https://github.com/mui/mui-x/blob/HEAD/packages/grid/x-data-grid/src/constants/localeTextConstants.ts) in the GitHub repository.
   */
  localeText?: MuiDataGrid.DataGridProps['localeText'];
  /**
   * The zero-based index of the current page.
   * @default 0
   */
  page?: MuiDataGrid.DataGridProps['page'];
  /**
   * Set the number of rows in one page. If some of the rows have children (for instance in the tree data), this number represents the amount of top level rows wanted on each page.
   * @default 10
   */
  pageSize?: MuiDataGrid.DataGridProps['pageSize'];
  /**
   * Pagination can be processed on the server or client-side. Set it to 'client' if you would like to handle the pagination on the client-side. Set it to 'server' if you would like to handle the pagination on the server-side.
   * @type "client" | "server"
   * @default "client"
   */
  paginationMode?: MuiDataGrid.DataGridProps['paginationMode'];
  /**
   * Set the total number of `rows`, if it is different from the length of the value rows prop. If some rows have children (for instance in the tree data), this number represents the amount of top level rows.
   */
  rowCount?: MuiDataGrid.DataGridProps['rowCount'];
  /**
   * Set the height in pixel of a row in the grid.
   * @default 40
   */
  rowHeight?: MuiDataGrid.DataGridProps['rowHeight'];
  /**
   * Sets the type of space between rows added by `getRowSpacing`.
   * @type "border" | "margin"
   * @default "margin"
   */
  rowSpacingType?: MuiDataGrid.DataGridProps['rowSpacingType'];
  /**
   * Select the pageSize dynamically using the component UI.
   * @type Array<number>
   * @default [10, 25, 50]
   */
  rowsPerPageOptions?: MuiDataGrid.DataGridProps['rowsPerPageOptions'];
  /**
   * Override the height/width of the grid inner scrollbar.
   */
  scrollbarSize?: MuiDataGrid.DataGridProps['scrollbarSize'];
  /**
   * If `true`, the right border of the cells are displayed.
   * @default false
   */
  showCellRightBorder?: MuiDataGrid.DataGridProps['showCellRightBorder'];
  /**
   * If true, the right border of the column headers are displayed.
   * @default false
   */
  showColumnRightBorder?: MuiDataGrid.DataGridProps['showColumnRightBorder'];
  /**
   * Sorting can be processed on the server or client-side. Set it to 'client' if you would like to handle sorting on the client-side. Set it to 'server' if you would like to handle sorting on the server-side.
   * @type "client" | "server"
   * @default "client"
   */
  sortingMode?: MuiDataGrid.DataGridProps['sortingMode'];
  /**
   * The order of the sorting sequence.
   * @type Array<"asc" | "desc" | null>
   * @default ["asc", "desc", null]
   */
  sortingOrder?: MuiDataGrid.DataGridProps['sortingOrder'];
}
export const DataGrid = React.forwardRef<
  React.ElementRef<typeof MuiDataGrid.DataGrid>,
  DataGridProps
>(
  (
    {
      className,
      components,
      initialState,
      headerHeight = 40,
      rowHeight = 40,
      rowsPerPageOptions = PAGE_SIZE_LIST,
      disableSelectAllCheckbox = false,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={theme}>
        <MuiDataGrid.DataGrid
          ref={ref}
          className={cn('bg-base-lo', className)}
          components={{
            BaseCheckbox: CustomCheckbox,
            Footer: CustomFooter,
            NoRowsOverlay: CustomNoRowsOverlay,
            ...components,
          }}
          initialState={{
            pagination: {
              pageSize: DEFAULT_PAGE_SIZE,
            },
            ...initialState,
          }}
          headerHeight={headerHeight}
          rowHeight={rowHeight}
          rowsPerPageOptions={rowsPerPageOptions}
          sx={{
            '& .MuiDataGrid-columnHeader': {
              ...$semantic.typography.subtitle2Bold,

              '&:focus, &:focus-within': {
                outline: 'none',
              },
            },
            '& .MuiDataGrid-cell': {
              ...$semantic.typography.bodyNormal2Regular,

              '&:focus, &:focus-within': {
                outline: 'none',
              },
              '&.MuiDataGrid-cell--editing': {
                boxShadow: 'none',
                '&:focus, &:focus-within': {
                  outline: 'none',
                },
              },
            },
            '& .MuiDataGrid-columnHeaderCheckbox': {
              '& .MuiDataGrid-columnHeaderTitleContainer': {
                ...(disableSelectAllCheckbox && {
                  display: 'none',
                }),
              },
            },
            ...sx,
          }}
          {...props}
        />
      </ThemeProvider>
    );
  }
);
DataGrid.displayName = 'DataGrid';

const PaginationBaseButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, forwardedRef) => {
  return (
    <button
      ref={forwardedRef}
      className={cn(
        'bg-base-lo text-label4Regular mx-1 flex h-8 w-8 items-center justify-center rounded-md transition-colors',
        'hover:bg-base-3',
        'disabled:cursor-not-allowed disabled:opacity-40',
        className
      )}
      {...props}
    />
  );
});
PaginationBaseButton.displayName = 'PaginationBaseButton';

const CustomPageSizeSelector = () => {
  const apiRef = MuiDataGrid.useGridApiContext();
  const pageSize = MuiDataGrid.useGridSelector(apiRef, MuiDataGrid.gridPageSizeSelector);
  const setPageSize = React.useCallback(
    (value: string) => apiRef.current.setPageSize(parseInt(value) || DEFAULT_PAGE_SIZE),
    [apiRef]
  );

  return (
    <Select value={pageSize.toString()} onValueChange={setPageSize}>
      <SelectTrigger className="h-8 w-20">
        <SelectValue placeholder="Select a page size" />
      </SelectTrigger>
      <SelectContent>
        {PAGE_SIZE_LIST.map((value) => (
          <SelectItem className="h-8" key={value} value={value.toString()}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const CustomPagination = () => {
  const apiRef = MuiDataGrid.useGridApiContext();
  const page = MuiDataGrid.useGridSelector(apiRef, MuiDataGrid.gridPageSelector);
  const pageCount = MuiDataGrid.useGridSelector(apiRef, MuiDataGrid.gridPageCountSelector);

  const { items } = usePagination({
    count: pageCount,
    page: page + 1,
    onChange: (_, value) => apiRef.current.setPage(value - 1),
  });

  return (
    <ul className="flex items-center">
      {items.map(({ page, type, selected, ...item }, index) => (
        <li key={`pagination-button-${index}`}>
          {type === 'start-ellipsis' || type === 'end-ellipsis' ? (
            <div className="bg-base-lo text-base-weak mx-1 flex h-8 w-8 items-center justify-center">
              <MoreHorizontal className="h-4 w-4" />
            </div>
          ) : (
            <PaginationBaseButton
              className={cn(selected && 'bg-primary-base text-base-lo hover:bg-primary-hi')}
              {...item}
            >
              {type === 'first' && <ChevronsLeft className="h-6 w-6" />}
              {type === 'previous' && <ChevronLeft className="h-6 w-6" />}
              {type === 'page' && page}
              {type === 'next' && <ChevronRight className="h-6 w-6" />}
              {type === 'last' && <ChevronsRight className="h-6 w-6" />}
            </PaginationBaseButton>
          )}
        </li>
      ))}
    </ul>
  );
};

const CustomFooter = () => {
  const apiRef = MuiDataGrid.useGridApiContext();
  const rowCount = MuiDataGrid.useGridSelector(apiRef, MuiDataGrid.gridRowCountSelector);

  if (rowCount === 0) {
    return null;
  }

  return (
    <div className="shadow-outline-top-blur flex items-center justify-between p-2">
      <CustomPageSizeSelector />
      <CustomPagination />
    </div>
  );
};

const CustomNoRowsOverlay = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-1">
      <EmptyIcon />
      <p className="text-bodyNormal2Regular">No Rows</p>
    </div>
  );
};

const CustomCheckbox = React.forwardRef<
  React.ElementRef<typeof MuiCheckbox>,
  React.ComponentPropsWithoutRef<typeof MuiCheckbox>
>(({ color = 'primary', ...props }, forwardedRef) => {
  return (
    <MuiCheckbox
      ref={forwardedRef}
      color={color}
      icon={<Square className="h-[1em] w-[1em] select-none" />}
      checkedIcon={<CheckSquare className="h-[1em] w-[1em] select-none" />}
      indeterminateIcon={<MinusSquare className="h-[1em] w-[1em] select-none" />}
      {...props}
    />
  );
});
CustomCheckbox.displayName = 'CustomCheckbox';
