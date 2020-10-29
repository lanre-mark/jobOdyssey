import React from 'react';
import {Platform, StatusBar} from 'react-native'

import {GlobalTheme} from '../theme';

// const AppContext = React.createContext(); // Context
// export const GlobalContext = () => React.useContext(AppContext);

// const GlobalContextProvider = ({children}) => {
//     const [user, setUser] = React.useState(() => ({
//         'name': 'harry potter'
//     }));
//     // const [themeContainer, setThemeContainer] = React.useState({
//     //       themeName: 'light',
//     //       themeScheme: GlobalTheme.light,
//     // });

//     // Platform.OS === 'ios' && StatusBar.setBarStyle(state.themeState + '-content', true)
//     // const updateTheme = (themeName) => {
//     //     // setThemeContainer((prevTheme) => {
//     //     //   // if (prevTheme.themeName === 'light') {
            
//     //     //   // } else if (prevTheme.themeName === 'dark') {
//     //     //   //   return { 
//     //     //   //     themeName: 'dark',
//     //     //   //     themeScheme: GlobalTheme.dark
//     //     //   //   }
//     //     //   // }
//     //     //     return { 
//     //     //       themeName: 'light',
//     //     //       themeScheme: GlobalTheme.light
//     //     //     }
//     //     //   }
//     //     // )
//     //     setThemeContainer({themeName: 'light',
//     //           themeScheme: GlobalTheme.light})
//     //   }
//     // }
//     return (
//         <AppContext.Provider value={{ 
//             user,
//             themeContainer,
//         }}>
//         	{children}
//         </AppContext.Provider>
//     );
// }
// export default GlobalContextProvider;

export const initialGlobalState = {
  // themeName: 'light',
  // themeScheme: GlobalTheme.light,
  themeState: 'light',
  theme: GlobalTheme.light,
}

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'changeGlobalTheme':
      // let globalTheme;
      // let themeScheme;
      let themeState
      let theme;
      // Platform.OS === 'ios' && StatusBar.setBarStyle(state.themeName + '-content', true)
      Platform.OS === 'ios' && StatusBar.setBarStyle(state.themeState + '-content', true)
      if (state.themeName === 'light') {
        // globalTheme = 'dark'
        // themeScheme = GlobalTheme.dark
        themeState = 'dark'
        theme = GlobalTheme.dark
      } else {
        // globalTheme = 'light'
        // themeScheme = GlobalTheme.light
        themeState = 'light'
        theme = GlobalTheme.light
      }
      return {
        ...state,
        // globalTheme,
        // themeScheme,
        themeState,
        theme,
      }
    default:
      throw new Error('Undefined global action ' + action)
  }
}

const GlobalStateContext = React.createContext(globalReducer)
const DispatchGlobalContext = React.createContext((() => 0))

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(globalReducer, initialGlobalState);
  const [user, setUser] = React.useState(() => ({userId: 'mee', userData: 'ok'}));

  const updateUser = (newUserDetails) => {
    setUser(newUserDetails)
  }

  return (
    <DispatchGlobalContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={{state, user, updateUser}}>{children}</GlobalStateContext.Provider>
    </DispatchGlobalContext.Provider>
  )
}
export const useDispatch = () => React.useContext(DispatchGlobalContext)
export const useGlobalState = () => {
  return React.useContext(GlobalStateContext)
}