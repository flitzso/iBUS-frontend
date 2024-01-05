import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { UserList, UserCreate, UserEdit } from './users/index'
import { ViagensList, ViagensCreate, ViagensEdit } from './viagens/index'
import { OnibusList, OnibusCreate, OnibusEdit } from './onibus/index'
import { AssentosList, AssentosCreate, AssentosEdit } from './assentos/index'
import { ReservasList, ReservasCreate, ReservasEdit } from './reservas/index'
import { authProvider } from "./authProvider";
import jsonServerProvider from 'ra-data-json-server';

const myDataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); //user e Senha: johndoe / password

export const App = () => (
  <Admin dataProvider={myDataProvider} authProvider={authProvider}>
    <Resource 
      name="users" 
      list={UserList} 
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource 
      name="viagens" 
      list={ViagensList} 
      create={ViagensCreate}
      edit={ViagensEdit}
    />
     <Resource 
      name="onibu"
      list={OnibusList} 
      create={OnibusCreate}
      edit={OnibusEdit}
    />
     <Resource 
      name="assentos"
      list={AssentosList} 
      create={AssentosCreate}
      edit={AssentosEdit}
    />
     <Resource 
      name="reservas"
      list={ReservasList} 
      create={ReservasCreate}
      edit={ReservasEdit}
    />
  </Admin>
);

