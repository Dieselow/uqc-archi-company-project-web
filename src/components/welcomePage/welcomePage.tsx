import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import { useStyles } from './welcomePage.style';
import { Title } from '../title/title';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPatient } from '../loginPatient/loginPatient';
import { UserLogin } from '../userLogin/userLogin';
import { CrudPatient } from '../crudPatient/crudPatient';
import { Patient } from '../crudPatient/crudPatient';
import {Caregiver} from '../crudCaregiver/crudCaregiver';
import {CrudCaregiver} from '../crudCaregiver/crudCaregiver';
import { CrudSecretary, Secretary } from '../crudSecretary/crudSecretary';

const patient : Patient = {
  firstname : 'Toto',
  lastname : 'Doe',
  adress: '779 rue huard',
  phoneNumber: '0999',
  email: 'toto@gmail.com'
}
const caregiver : Caregiver = {
  firstname : 'Edward',
  lastname : 'House',
  adress: '3 rue De Gaulle',
  phoneNumber: '012399',
  email: 'DrHouse@gmail.com',
  employmentdate: '08/10/1998'
}

const secretary : Secretary = {
  firstname : 'Edward',
  lastname : 'House',
  adress: '3 rue De Gaulle',
  phoneNumber: '012399',
  email: 'DrHouse@gmail.com',
  employmentdate: '08/10/1998'
}
type Props = {
}
const isPossible = true;

export const WelcomePage = (props: Props) => {
  const classes = useStyles();

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path='/'>
          <LoginPatient />
        </Route>
        {isPossible &&
          <Route path='/caregiver'>
            <UserLogin type={'caregiver'}/>
          </Route>}
          <Route path='/crud/caregiver'>
          <CrudCaregiver caregiver={caregiver}/>
        </Route>
        {isPossible &&
          <Route path='/secretary'>
            <UserLogin type={'secretary'}/>
          </Route>}
          <Route path='/crud/secretary'>
          <CrudSecretary secretary={secretary}/>
        </Route>
          
        <Route path='/login'>
          <UserLogin type={'patient'}/>
        </Route>
        <Route path='/crud/patient'>
          <CrudPatient patient={patient}/>
        </Route>
      </Switch>
    </Router>
  );
}
