// import { WrapText } from '@mui/icons-material';
import {createTheme, responsiveFontSizes } from '@mui/material';
// import { hover } from '@testing-library/user-event/dist/hover';

const theme = createTheme({
  palette: {
      primary: {
          main: '#23296c'
      },
      secondary: {
          main: '#d4e1f1'
      },
      accent: {
          main: '#FCE698'
      },
      background: {
          default: '#212035',
          paper: '#fff',
          paper2: '#d4e1f1'
      },
      pink: {
          main: '#FFDDD2'
      },
      text: {
          primary: '#000',
          secondary: '#fff',
          darkBlue: '#23296c'
      },
  },
  components: {
      MuiLink: {
          variants: [
              {
                  props: { variant: 'linkicon'},
                  style: {
                      color: '#fff',
                      fontFamily: 'nunito',
                      fontSize: '1.1rem',
                      fontWeight: 'normal',
                      textDecoration: 'none',
                      margin: '1rem',
                      "&:hover":{
                          textShadow: '#fff -1.2px 0.3px',
                      }
                  }
              },
              // {
              //     props: {variant: 'header'},
              //     style: {
              //         fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
              //         fontSize: '2rem',
              //         fontWeight: 'bold',
              //         color: 'primary',
              //         lineHeight: 1,
              //         textDecoration: 'none'
              //     }
              // }
      ]
      },
      MuiButton: {
          variants: [
              {
                props: { variant: 'numpad', color: 'primary' },
                style: {
                    background: '#f2f4f3',
                    color: '#000',
                    width: '100%',
                    height: '4.5rem',
                      // fontFamily: 'nunito',
                      // fontWeight: 'bold',
                    "&:hover":{
                        background: 'rgba(252, 230, 152, 0.8)',
                        }
                    }
              },
              {
                props: { variant: 'menubtn', color: 'primary' },
                style: {
                    background: '#7ca6f3',
                    color: '#000',
                    width: '30%',
                    height: '4.6rem',
                      // fontFamily: 'nunito',
                      // fontWeight: 'bold',
                    "&:hover":{
                        background: 'rgba(101, 143, 223, 0.8)',
                        }
                    }
              },
              {
                props: { variant: 'dobtn', color: 'primary' },
                style: {
                    background: '#49cd5f',
                    color: '#000',
                    width: '50%',
                    
                      // fontFamily: 'nunito',
                      // fontWeight: 'bold',
                    "&:hover":{
                        background: 'rgba(54, 190, 77, 1)',
                        }
                    }
              },
              {
                props: { variant: 'dontbtn', color: 'primary' },
                style: {
                    background: '#d32f2f',
                    color: '#000',
                    width: '50%',
                    
                      // fontFamily: 'nunito',
                      // fontWeight: 'bold',
                    "&:hover":{
                        background: 'rgba(197, 41, 41, 1)',
                        }
                    }
              },
          ]
      }
  },
  typography: {
      innerText: {
        fontFamily: ['"Raleway"', 'sans-serif]'].join(','),
        fontSize: '1rem'
      },
      h5: {
        color: '#23296c',
        fontFamily: ['"Work Sans"', 'sans-serif'].join(','),
      },
      h6: {
        color: '#000',
        fontFamily: ['"Work Sans"', 'sans-serif'].join(','),
      }
  }
})

export default responsiveFontSizes(theme);