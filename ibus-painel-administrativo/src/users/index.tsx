import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput, Edit } from "react-admin";

export const UserList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
       <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="senha" />
       </Datagrid>
    </List>
  );

  export const UserCreate = (props: ResourceComponentInjectedProps) => (
   <Create {...props}>
      <SimpleForm>

         <TextInput source="id" disabled />
         <TextInput source="nome" />
         <TextInput source="email" />
         <TextInput source="senha" />

      </SimpleForm>
   </Create>
 );

 export const UserEdit = (props: ResourceComponentInjectedProps) => (
   <Edit {...props}>
      <SimpleForm>

         <TextInput source="id" disabled />
         <TextInput source="nome" />
         <TextInput source="email" />
         <TextInput source="senha" />

      </SimpleForm>
   </Edit>
 );