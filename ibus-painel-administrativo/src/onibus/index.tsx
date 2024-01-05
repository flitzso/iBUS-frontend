import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput, Edit } from "react-admin";

export const OnibusList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
       <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="numero_onibus" />
          <TextField source="modelo" />
          <TextField source="capacidade_assentos" />
       </Datagrid>
    </List>
  );

  export const OnibusCreate = (props: ResourceComponentInjectedProps) => (
   <Create {...props}>
      <SimpleForm>

         <TextInput source="id" disabled />
         <TextInput source="numero_onibus" />
         <TextInput source="modelo" />
         <TextInput source="capacidade_assentos" />

      </SimpleForm>
   </Create>
 );

 export const OnibusEdit = (props: ResourceComponentInjectedProps) => (
   <Edit {...props}>
      <SimpleForm>

         <TextInput source="id" disabled />
         <TextInput source="numero_onibus" />
         <TextInput source="modelo" />
         <TextInput source="capacidade_assentos" />

      </SimpleForm>
   </Edit>
 );