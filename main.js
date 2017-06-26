import React from 'react';
import {render} from 'react-dom';

import AppComponent from './components/TestPage.js';

// rem适配
import 'lib-flexible/flexible.js';

//图标
import 'mdi/css/materialdesignicons.css';

render(<AppComponent />, document.getElementById('content'));