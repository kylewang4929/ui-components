import React from 'react';
import {render} from 'react-dom';

import AppComponent from './components/TestPage.js';

//图标
import 'mdi/css/materialdesignicons.css';

render(<AppComponent />, document.getElementById('content'));