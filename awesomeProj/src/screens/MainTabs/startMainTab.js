import { Navigation } from "react-native-navigation";
import Icon from"react-native-vector-icons/Ionicons";

const locationStack = (icons) => {
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
        icon: icons[2],
        testID: 'THIRD_TAB_BAR_BUTTON'
      },
      topBar: {
        visible: true,
        title: {
          component: {
            name: 'awesomeproject.SideDrawer',
            passProps: {
              title: "Info"
            }
          }
        },
        icon: icons[3]
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
                        component: {
                          name: 'awesomeproject.SideDrawer',
                          passProps: {
                            title: "Home"
                          }
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
                        component: {
                          name: 'awesomeproject.SideDrawer',
                          passProps: {
                            title: "Feed"
                          }
                        }
                      },
                      icon: icons[3]
                    }
                  }
                }
              },
              {
                stack: locationStack(icons)
              }]
            }
          },
          rigth:{}
        }
      }
    });
  });
}
