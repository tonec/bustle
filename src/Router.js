import React from 'react'
import { StyleSheet } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Main from './layout/Main'

const RouterComponent = () => {

  return (
    <Router sceneStyle={style.scene} >

      <Scene key='primaryScene'>
        <Scene
          key='mainScene'
          component={Main}
          title='Main'
        />
      </Scene>

    </Router>
  )
}

const style = StyleSheet.create({
  scene: {
    paddingTop: 65
  }
})

export default RouterComponent
