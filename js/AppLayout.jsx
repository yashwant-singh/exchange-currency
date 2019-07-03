import React from 'react';
import { render } from 'react-dom';
import MainLayot from './components/MainLayout';

const AppLayout = () => <MainLayot />;
export default AppLayout;
render(<AppLayout />, document.getElementById('app'));
