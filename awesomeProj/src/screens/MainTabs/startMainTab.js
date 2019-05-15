import { Navigation } from "react-native-navigation";
import Icon from"react-native-vector-icons/Ionicons";

const locationStack = (icon) => {
  return {
    children:[{
      component: {
        id: "SharedSpace",
        name: 'awesomeproject.SharedSpace',
        passProps: {
          text: 'This is tab 3'
        }
      }
    }],
    options: {
      bottomTab: {
        text: 'Tab 3',
        icon: icon,
        testID: 'THIRD_TAB_BAR_BUTTON'
      },
      topBar: {
        visible: true,
        title: {
          height: 70,
          alignment: 'left',
          text: "Info"
        }
      }
    }
  }
}
export default menuTabs = () => {
  Promise.all([
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-home", 30),
    Icon.getImageSource("ios-bus", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(icons => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              id: "SideMenuItems",
              name: 'awesomeproject.SideMenuItems',
              passProps: {
                text: 'This is a left side menu screen'
              }
            },
            options: {
              navigatorButtons: {
                leftButtons: [
                  {
                    id: 'buttonOne',
                    icon: icons[3]
                  }
                ],
                text: 'Side Bar',
                icon: icons[3],
                testID: 'FOUTH_TAB_BAR_BUTTON',
                leftButtons: [
                  {
                    id: 'buttonOne',
                    icon: icons[3]
                  }
                ]
              }
            }

          },
          center: {
            bottomTabs: {
              children: [{
                stack: {
                  children: [{
                    component: {
                      id: "AuthScreen",
                      name: 'awesomeproject.AuthScreen',
                      passProps: {
                        text: 'This is tab 1'
                      }
                    }
                  }],
                  options: {
                    bottomTab: {
                      text: 'Tab 1',
                      icon: icons[3],
                      testID: 'FIRST_TAB_BAR_BUTTON'
                    },
                    topBar: {
                      visible: true,
                      title: {
                        // height: 70,
                        // alignment: 'left',
                        // text: "Login",
                        // icon: icons[3]
                        component: {
                          name: 'awesomeproject.SideDrawer'
                        }
                      },
                      icon: icons[3]
                    }
                  }
                }
              },
              {
                stack: {
                  children: [{
                    component: {
                      id: "FindUser",
                      name: 'awesomeproject.FindUser',
                      passProps: {
                        text: 'This is tab 2'
                      }
                    }
                  }],
                  options: {
                    bottomTab: {
                      text: 'Tab 2',
                      icon: icons[1],
                      testID: 'SECOND_TAB_BAR_BUTTON'
                    },
                    topBar: {
                      visible: true,
                      title: {
                        height: 70,
                        alignment: 'left',
                        text: "Find User"
                      }
                    }
                  }
                }
              },
              {
                stack: locationStack(icons[2])
              }]
            }
          },
          rigth:{}
        }
      }
    });
  });
}
