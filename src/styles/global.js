import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
*{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    hmtl,body, #root{
        min-height: 100%;
    }
    body{

        background: #E5E5E5;
        -webkit-font-smoothing: atialiased !important;
    }

    body,input,button{
        font:14px Roboto, sans-serif;
    }
`;
