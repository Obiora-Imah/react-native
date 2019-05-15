/**
 * @format
 */
// import React from "react";
// import {AppRegistry} from 'react-native';
import { Navigation } from "react-native-navigation";
import {Provider} from "react-redux";
import FindUser from "./src/screens/FIndUser/FindUser"
import SharedSpace from "./src/screens/SharedSpace/SharedSpace"
import Auth from "./src/screens/auth/Auth"
import SideDrawer from "./src/screens/SideDrawer/SideDrawer"
import SideMenuItems from "./src/screens/SideDrawer/SideMenuItems"
import UserDetail from "./src/screens/userDetail/UserDetails"
import store from "./src/store/store"

const configStore = store();

Navigation.registerComponentWithRedux(`awesomeproject.AuthScreen`, () => Auth, Provider, configStore);
Navigation.registerComponentWithRedux(`awesomeproject.FindUser`, () => FindUser, Provider, configStore);
Navigation.registerComponentWithRedux(`awesomeproject.SharedSpace`, () => SharedSpace, Provider, configStore);
Navigation.registerComponentWithRedux(`awesomeproject.UserDetail`, () => UserDetail, Provider, configStore);
Navigation.registerComponentWithRedux(`awesomeproject.SideDrawer`, () => SideDrawer, Provider, configStore);
Navigation.registerComponentWithRedux(`awesomeproject.SideMenuItems`, () => SideMenuItems, Provider, configStore);

Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setRoot({
    // root: {
    //   stack: {
    //     children: [{
    //       component: {
    //         name: "awesomeproject.AuthScreen",
    //         passProps: {
    //           text: 'dynamic cont'
    //         },
            // options: {
            //   topBar: {
            //     visible: true,
            //     title: {
            //       height: 70,
            //       alignment: 'center',
            //       text: "Begin"
            //     }
            //   }
            // }
    //       }
    //     }]
    //   }
    // }

    root: {
      sideMenu: {
        id: "sideMenu",
        left: {
          component: {
            id: "SideDrawer",
            name: "awesomeproject.SideDrawer"
          }
        },
        center: {
          stack: {
            id: "AppRoot",
            children: [{
              component: {
                id: "AuthScreen",
                name: "awesomeproject.AuthScreen",
                passProps: {
                  text: "starter"
                }
              }
            }],
            options: {
              topBar: {
                visible: true,
                title: {
                  height: 70,
                  alignment: 'center',
                  text: "Start"
                }
              }
            }
          }
        }
      }
    }
  });
});
