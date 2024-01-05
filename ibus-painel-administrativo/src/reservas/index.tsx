import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput, Edit } from "react-admin";

export const ReservasList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
       <Datagrid rowClick="edit">
          <TextField source="assento_id" />
          <TextField source="viagens_id" />
          <TextField source="onibus_id" />
          <TextField source="data_hora" />
          <TextField source="status_reserva" />
          <TextField source="info" />
       </Datagrid>
    </List>
  );

  export const ReservasCreate = (props: ResourceComponentInjectedProps) => (
   <Create {...props}>
      <SimpleForm>

         <TextInput source="assento_id" disabled />
         <TextInput source="viagens_id" disabled />
         <TextInput source="onibus_id" disabled />
         <TextInput source="data_hora" />
         <TextInput source="status_reserva" />
         <TextInput source="info" />

      </SimpleForm>
   </Create>
 );

 export const ReservasEdit = (props: ResourceComponentInjectedProps) => (
   <Edit {...props}>
      <SimpleForm>

         <TextInput source="assentos_id" disabled />
         <TextInput source="viagens_id" disabled />
         <TextInput source="onibus_id" disabled />
         <TextInput source="data_hora" />
         <TextInput source="status_reserva" />
         <TextInput source="info" />

      </SimpleForm>
   </Edit>
 );