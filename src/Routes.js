import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Loginn from './pages/Loginn';
import Bekleyen from './pages/Bekleyen';
import Tamamlanan from './pages/Tamamlanan';
import sifiryirmidort from './pages/sifiryirmidort';
import yirmidortkirksekiz from './pages/yirmidortkirksekiz';
import kirksekizyetmisiki from './pages/kirksekizyetmisiki';
import yetmisikiustu from './pages/yetmisikiustu';

export default class Routes extends Component {
    render() {
        return(
        <Router>  
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Giriş Yap" initial={true} />
            <Scene key="signup" component={Signup} title="Kaydol"/>
            <Scene key="loginn" component={Loginn} title="Kaydol"/>
            <Scene key="bekleyen" component={Bekleyen} title="bekleyen"/>
            <Scene key="tamamlanan" component={Tamamlanan} title="tamamlanan"/>
            <Scene key="sifiryirmidort" component={ sifiryirmidort} title="tamamlanan"/>
            <Scene key="yirmidortkirksekiz" component={yirmidortkirksekiz} title="tamamlanan"/>
            <Scene key="kirksekizyetmisiki" component={kirksekizyetmisiki} title="tamamlanan"/>
            <Scene key="yetmisikiustu" component={yetmisikiustu} title="tamamlanan"/>
            </Stack>
        </Router>
        )
    }
}