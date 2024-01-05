import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput, Edit } from "react-admin";

export const AssentosList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
       <Datagrid rowClick="edit">
          <TextField source="assento_id" />
          <TextField source="onibus_id" />
          <TextField source="numero_assento" />
          <TextField source="status" />
          <TextField source="info" />
       </Datagrid>
    </List>
  );

  export const AssentosCreate = (props: ResourceComponentInjectedProps) => (
   <Create {...props}>
      <SimpleForm>

         <TextInput source="assento_id" disabled />
         <TextInput source="onibus_id" disabled />
         <TextInput source="numero_assento" />
         <TextInput source="status" />
         <TextInput source="info" />

      </SimpleForm>
   </Create>
 );

 export const AssentosEdit = (props: ResourceComponentInjectedProps) => (
   <Edit {...props}>
      <SimpleForm>

         <TextInput source="assento_id" disabled />
         <TextInput source="onibus_id" disabled />
         <TextInput source="numero_assento" />
         <TextInput source="status" />
         <TextInput source="info" />

      </SimpleForm>
   </Edit>
 );