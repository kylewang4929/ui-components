import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import AirDashboard from '../src/Dashboard/AirDashboard';
import BaseDashboard from '../src/Dashboard/BaseDashboard';
import WaterDashboard from '../src/Dashboard/WaterDashboard';
import TabMenu from '../src/TabMenu';
import InfoPanel from '../src/InfoPanel';
import InfoBar from '../src/InfoBar';
import ColorPick from '../src/ColorPick';

//图标
require('mdi/css/materialdesignicons.css');

storiesOf('Dashboard', module).add('AirDashboard', () => (
    <div style={{backgroundColor: 'rgb(22, 175, 203)'}}><AirDashboard/></div>
)).add('BaseDashboard', () => (
    <BaseDashboard/>
)).add('WaterDashboard', () => (
    <WaterDashboard/>
));

storiesOf('Info', module).add('InfoBar', () => {
  const data = [
    {icon: 'mdi mdi-cloud', label: '测试', unit: ''},
    {icon: 'mdi mdi-collage', label: 20, unit: '中'},
    {icon: 'mdi mdi-fire', label: 30, unit: '℃'},
    {icon: 'mdi mdi-hexagon-multiple', label: 70, unit: '%'},
  ];
  return (<div style={{backgroundColor: 'rgb(22, 175, 203)', padding: '100px 0px'}}><InfoBar datas={data}/></div>);
})
.add('InfoPanel', () => {
    return (
        <div style={{backgroundColor: 'rgb(22, 175, 203)', padding: '100px 0px'}}><InfoPanel/></div>
    )
});

storiesOf('Nav', module).add('TabMenu', () => (
    <div style={{width: '300px', margin: '20px auto'}}><TabMenu/></div>
));

storiesOf('ColorPick', module).add('ColorPick', () => (
    <ColorPick radius={120} disable={false} color={'#00ff00'}/>
));
