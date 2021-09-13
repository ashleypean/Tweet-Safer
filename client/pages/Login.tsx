import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100% ',
  }, 
  title: {
    margin: 0, 
    textAlign: 'center',
  },
  paragraph: {
    margin: '.36rem auto 2rem',
    width: '60%',
    textAlign: 'center',
  },
  input: {
    width: '300px',
  }, 
  rememberMe: {
    width: '200px', 
    offset: '30px',
  }
}

const Login = () => {
  const [rememberUser, setRememberUser] = useState(true);

  const onCheck = () => setRememberUser(!rememberUser);

  const onFinish = (values:  ValidateErrorEntity<string>) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<ValidateErrorEntity<string>>) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      name="basic"
      labelCol={{
        span: 500,
      }}
      wrapperCol={{
        span: 1200,
      }}
      initialValues={{
        remember: true,
      }}
      style={styles.form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
    >
      <Typography.Title
        style={styles.title}
        level={1}
      >
        Welcome to TweetSafer!
      </Typography.Title>
      <Typography.Paragraph
        style={styles.paragraph}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem voluptatibus voluptates vel nemo deserunt, pariatur nostrum. Nulla, ea doloremque veritatis nesciunt dolor sint, beatae perspiciatis ipsa molestias saepe dignissimos. Aliquid?
      </Typography.Paragraph>
      <Form.Item
        style={styles.input}
        name={['user', 'email']} 
        label="Email" 
        hasFeedback={true}
        rules={[{
            type: 'email', 
            required: true,
            message: 'Please input your email', 
        }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        style={styles.rememberMe}
        name="remember"
        valuePropName="checked"
        // style={styles.rememberMe}
        wrapperCol={{
          span: 120,
          offset: 5,
        }}
      >
        {/* TODO - add functionality for the remember me button so user data can be saved on client */}
        <Checkbox
          checked={rememberUser}
          onChange={onCheck}
          defaultChecked={true}
        >
          Remember me
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" shape="round" >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Login;