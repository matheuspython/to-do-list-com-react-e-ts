import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .container{
    padding:0 2%;
    width: 100%;
    max-width:1280px;
    margin:5px auto;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    form{
      width: 400px;
      border:1px solid white;
      border-radius:12px;
      padding: 9px;
      display: flex;
      justify-content: space-between;
      flex-direction:column;
      gap:5px;
      input{
        border:0;
        width: 100%;
        outline:0;
        padding: 6px;
      }
      button{
        border: 0;
        border-radius:8px;
        height:22px;
        cursor:pointer;
      }
    }

    ul{
      margin-top:9px;
      width: 100%;
      max-width:400px;
      /* li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 5px;


        img{
          width: 30px;
          cursor: pointer;
        }
      } */
    }
  }

`;
