import { faker } from '@faker-js/faker';
import type * as MuiDataGrid from '@mui/x-data-grid';

interface SampleUser {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
}

const createRandomUser = (): Omit<SampleUser, 'id'> => ({
  lastName: faker.name.lastName(),
  firstName: faker.name.firstName(),
  age: faker.datatype.number(100),
});

export const rows: MuiDataGrid.GridRowsProp = Array.from(
  {
    length: 100,
  },
  createRandomUser
).map((user, index) => ({ id: index + 1, ...user }));

export const columns: MuiDataGrid.GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: MuiDataGrid.GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export const data = [
  {
    id: 1,
    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
    birthday: '2021-01-01T00:00:00.000Z',
    email: 'abc@email.com',
    firstName: 'firstName',
    lastName: 'lastName',
    sex: 'male',
    status: 'active',
    price: 10000,
    createBy: 'admin',
    createDate: '2021-01-01T00:00:00.000Z',
    updateBy: 'admin',
    updateDate: '2021-01-02T00:00:00.000Z',
  },
  {
    id: 2,
    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
    birthday: '2021-01-01T00:00:00.000Z',
    email: 'abc@email.com',
    firstName: 'firstName',
    lastName: 'lastName',
    sex: 'male',
    status: 'active',
    price: 10000,
    createBy: 'admin',
    createDate: '2021-01-01T00:00:00.000Z',
    updateBy: 'admin',
    updateDate: '2021-01-02T00:00:00.000Z',
  },
];
