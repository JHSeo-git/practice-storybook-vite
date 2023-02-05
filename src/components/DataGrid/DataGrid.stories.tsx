import type * as MuiDataGrid from '@mui/x-data-grid';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { DataGrid } from './DataGrid';
import { columns, rows } from './DataGrid.sample';

const DataGridContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-base-hi h-80 w-full">{children}</div>;
};

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
  subcomponents: {},
} as ComponentMeta<typeof DataGrid>;

export const Template: ComponentStory<typeof DataGrid> = (args) => {
  return (
    <DataGridContainer>
      <DataGrid {...args} />
    </DataGridContainer>
  );
};
Template.args = {
  rows,
  columns,
};
Template.storyName = 'Default';

export function CheckboxSelection() {
  return (
    <DataGridContainer>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </DataGridContainer>
  );
}

export function SingleSelection() {
  const [selectionModel, setSelectionModel] = React.useState<MuiDataGrid.GridRowId[]>([]);
  return (
    <DataGridContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          if (newSelectionModel.length > 1) {
            const selectionSet = new Set(selectionModel);
            const result = newSelectionModel.filter((id) => !selectionSet.has(id));
            setSelectionModel(result);
            return;
          }

          setSelectionModel(newSelectionModel);
        }}
        disableSelectAllCheckbox
      />
    </DataGridContainer>
  );
}

export function NoRows() {
  return (
    <DataGridContainer>
      <DataGrid rows={[]} columns={columns} />
    </DataGridContainer>
  );
}
