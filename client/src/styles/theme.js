import { WrapText } from '@mui/icons-material';
import {createTheme, responsiveFontSizes } from '@mui/material';
// import { hover } from '@testing-library/user-event/dist/hover';

const theme = createTheme({
  palette: {
      // primary: {
      //     main: '#344E41'
      // },
      // secondary: {
      //     main: '#E29263'
      // },
      // accent: {
      //     main: '#9CA92E'
      // },
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
      }
  },
  components: {
      // MuiLink: {
      //     variants: [
      //         {
      //             props: { variant: 'nav'},
      //             style: {
      //                 fontFamily: 'nunito',
      //                 fontSize: '1.1rem',
      //                 fontWeight: 'normal',
      //                 textDecoration: 'none',
      //                 margin: '1rem',
      //                 "&:hover":{
      //                     textShadow: '#E29263 -1.2px 0.3px',
      //                 }
      //             }
      //         },
      //         {
      //             props: {variant: 'header'},
      //             style: {
      //                 fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
      //                 fontSize: '2rem',
      //                 fontWeight: 'bold',
      //                 color: 'primary',
      //                 lineHeight: 1,
      //                 textDecoration: 'none'
      //             }
      //         }
      // ]
      // },
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
          ]
      }
  },
  typography: {
      // // for home page
      // h1: {
      //     fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
      //     fontSize: '4rem',
      //     fontWeight: 'bold',
      //     color: 'primary',
      //     lineHeight: 1
      // },
      // // for Savannah Shifflet header on pages
      // h4: {
      //     fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
      //     fontSize: '2rem',
      //     fontWeight: 'bold',
      //     color: 'primary',
      //     lineHeight: 1
      // },
      // // for page headers
      // h2: {
      //     fontSize: '3rem',
      //     fontFamily: 'exo'
      // },
      // // Subtitles - 'my strengths'
      // h3: {
      //     fontFamily: 'exo',
      //     fontSize: '2rem'
      // },
      // body1: {
      //     fontFamily: 'nunito',
      //     fontSize: '1.2rem',
      //     fontWeight: 'bold'
      // }
      h5: {
        color: '#23296c'
        // Will add fonts later
      }
  }
})

export default responsiveFontSizes(theme); 