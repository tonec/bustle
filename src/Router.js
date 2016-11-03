import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Search from './components/Search';

const RouterComponent = () => {
    const { sceneStyle } = styles;

    return (
        <Router sceneStyle={sceneStyle} >

            <Scene key='mainScene'>
                <Scene
                    key='searchScene'
                    component={Search}
                    title='Search'
                />
            </Scene>

        </Router>
    );
};

const styles = {
    sceneStyle: {
        paddingTop: 65
    }
};

export default RouterComponent;
