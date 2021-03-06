import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from './components/loading';
import NotifyContainer from './components/notify-container';

import Main from './app/main';
import List from './app/list';
import Meetings from './app/meetings'

export default function Routes() {
    return (
        <>
            <Loading />
            <NotifyContainer />
            <Switch>
                <Route path='/' exact><Main /></Route>
                <Route path='/lista'><List /></Route>
                <Route path='/reuniao'><Meetings /></Route>
            </Switch>
        </>
    );
}