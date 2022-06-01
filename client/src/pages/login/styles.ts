import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Button } from 'antd';

export const Father = styled.div`
  background-color: ${theme.colors.background};
`;

export const Container = styled.div`
  background-color: ${theme.colors.background};
  box-sizing: border-box;

  position: absolute;
  width: 505px;
  height: 757px;
  left: 111px;
  top: 89px;

  background: #FFFFFF;
  border: 0.5px solid #878787;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  color: ${theme.colors.title};
`;

export const Image = styled.div`
  position: absolute;
  width: 827px;
  height: 650px;
  left: 598px;
  top: 127px;
`;

export const Infos = styled.div`

  h2{
    font-weight: 300;
    padding-left: 35px;
    padding-top: 14px;
    
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    line-height: 38px;
    margin:0;
    color: ${theme.colors.title};
  } 
  
  h1{
    font-weight: 500;

    padding-left: 35px;
    padding-top: 10px;

    font-family: 'Poppins', sans-serif;
    font-size: 31px;
    line-height: 46px;
    margin:0;
    color: ${theme.colors.title};
  }

  p{
    font-weight: 400;
    padding-left: 35px;
    padding-top: 1px;

    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin:0;
    color: ${theme.colors.title};
  }
`;

export const RegisterText = styled.p`
  text-align: center;
  padding-top: 340px;
  color: #7D7D7D;

  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  span {
    font-weight: 800;
    color: ${theme.colors.title};
  }

`;

export const Text = styled.div`
  position: absolute;
  left: 35px;
  top: 26px;
  

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin:0;
`;

export const Style = styled.div`
  box-sizing: border-box;

  position: absolute;
  height: 59px;
  width: 423px;
  left: 35px;
  top: 59px;
  margin:0;


  background: #FFFFFF;
  border: 0.6px solid #282828;
  border-radius: 6px;

  Input {
    left: 15px;
    top: 15px;
    border: 0px;
    margin:0;
    width: 400px;
  }
`;

export const Text2 = styled.div`
  position: absolute;
  left: 35px;
  top: 83px;
  

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin:0;
`;

export const Style2 = styled.div`
  box-sizing: border-box;

  position: absolute;
  height: 59px;
  width: 423px;
  left: 35px;
  top: 116px;


  background: #FFFFFF;
  border: 0.6px solid #282828;
  border-radius: 6px;
  margin:0;

  Input {
    left: 15px;
    top: 15px;
    border: 0px;
    margin:0;
    width: 400px;
  }
`;

export const Text3 = styled.div`
  position: absolute;
  left: 35px;
  top: 140px;
  

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin:0;
`;

export const Style3 = styled.div`
  box-sizing: border-box;

  position: absolute;
  height: 59px;
  width: 423px;
  left: 35px;
  top: 173px;


  background: #FFFFFF;
  border: 0.6px solid #282828;
  border-radius: 6px;
  margin:0;

  Input {
    left: 15px;
    top: 5px;
    border: 0px;
    margin:0;
    width: 423px;
    height: 45px;
    background-color: transparent;
  }

  svg {
    color: black;
    height: 18.132226943969727px;
    width: 19.086627960205078px;
  }
`;

export const Text4 = styled.div`
  position: absolute;
  left: 35px;
  top: 199px;
  

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin:0;
`;

export const Style4 = styled.div`
  box-sizing: border-box;

  position: absolute;
  height: 59px;
  width: 423px;
  left: 35px;
  top: 232px;


  background: #FFFFFF;
  border: 0.6px solid #282828;
  border-radius: 6px;
  margin:0;

  Input {
    left: 15px;
    top: 5px;
    border: 0px;
    margin:0;
    width: 423px;
    height: 45px;
    background-color: transparent;
  }

  svg {
    color: black;
    height: 18.132226943969727px;
    width: 19.086627960205078px;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  width: 423px;
  height: 57px;
  left: 35px;
  top: 631px;

  background: #000000;
  border-radius: 6px;
`;

export const Logo = styled.p`
position: absolute;
width: 100px;
height: 30px;
left: 42px;
top: 31px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;

`;