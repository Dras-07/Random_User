import {createGlobalStyle} from 'styled-components';


export const GlobalStyles = createGlobalStyle`
      body{
        background:${({theme})=>theme.body};
        color:${({theme})=>theme.text};
        transition:all .1s linear;
}
.person-container{
    background:${({theme})=>theme.table};
    color:${({theme})=>theme.text};

}
.header{
    background:${({theme})=>theme.headerback};
    color:${({theme})=>theme.headertext};
}
#personborde{
    border-bottom:1px solid ${({theme})=>theme.headerback};
}
`;


export const lightTheme={
    body:'#F9F9F3',
    text:'#121212',
    table:'#F9F9F3',
    headerback:"#1572A1",
    headertext:"#FFFFFF",
};
export const darkTheme={
    body:'#121212',
    text:'#ffff',
    headerback:"#24A19C",
    headertext:"#FFFFFF",
};