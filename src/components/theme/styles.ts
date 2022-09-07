import styled from "styled-components";


//background-image: linear-gradient(red, yellow);

export const Container = styled.div`
    background-color: #425353;
    box-shadow: 0 4px 30px rgba(0, 0, 7, 0.1);
    color: #FFF;
    min-height: 100vh;  
    -webkit-backdrop-filter: blur(6.5px);  
    

`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
    
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #add8e6
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;