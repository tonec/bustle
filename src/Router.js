import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SearchPage from './components/SearchPage';

const RouterComponent = () => {
    const { sceneStyle } = styles;

    return (
        <Router sceneStyle={sceneStyle} >

            <Scene key='mainScene'>
                <Scene
                    key='searchScene'
                    component={SearchPage}
                    title='Search page'
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
