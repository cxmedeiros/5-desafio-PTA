import {
  Container,
  Father,
  Image,
  Infos,
  RegisterText,
  Style,
  Text,
  Style2,
  Text2,
  Style3,
  Text3,
  Style4,
  Text4,
  StyledButton,
  Logo,

} from './styles';

import { Form, Input, Button, Checkbox } from 'antd';

import { Team } from '../../assets'

export const Login: React.FC = () => {

  return (
    <Father>
      <Logo>Your Logo</Logo>
        <Container>
          <Infos>
            <h2>Welcome !</h2>
            <h1>Sing up to</h1>
            <p>Lorem Ipsum is simply</p>
          </Infos>

          <Form>
            <Form.Item>
              <Text>
                <p>Email</p>
              </Text>
              <Style>
                <Input placeholder='Enter your email'/>
              </Style>
            </Form.Item>

            <Form.Item>
              <Text2>
                <p>User name</p>
              </Text2>
                <Style2>
                  <Input placeholder='Enter your user name'/>
                </Style2>
            </Form.Item>

            <Form.Item>
              <Text3>
                <p>Password</p>
              </Text3>
              <Style3>
                <Input.Password placeholder='Enter your Password'/>
              </Style3>
            </Form.Item>
            
            <Form.Item>
              <Text4>
                <p>Confirm Password</p>
              </Text4>
              <Style4>
                <Input.Password placeholder='Confrim your Password'/>
              </Style4>
            </Form.Item>

            <StyledButton type='primary' htmlType='submit'>
              Register
            </StyledButton>
          </Form>

          <RegisterText>
            Already have an Account?
            <span> Register</span>
          </RegisterText>
        </Container>
        <Image>
          <img src={Team} alt="team" />
        </Image>
    </Father>
  );
}