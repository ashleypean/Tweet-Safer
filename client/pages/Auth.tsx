import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Button, Checkbox, Typography, notification } from 'antd';
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

const Auth: React.FC <{
  setIsLoggedIn: (status: boolean) => void;
}> = 
({ setIsLoggedIn }) => {
  const history = useHistory();
  const [rememberUser, setRememberUser] = useState(true);

  const onCheck = () => setRememberUser(!rememberUser);

  useEffect(() => {
    fetch('/api/auth/init', {
      method: 'GET',
      mode: 'no-cors',
      headers: { 
        'Content-Type': 'application/json' 
      },
    })
    .then(res => res.json())
    .then(async data => {
      const isAuthenticated = data
      if(isAuthenticated) {
        await setIsLoggedIn(true)
        history.push('/')
      }
    })
  }, [])

  const onFinish = (values: ValidateErrorEntity<string>) => {
    /** 
     * @description - values
     * @property - remember { Boolean }
     * @property - user { Object: { email: string } }
     */
    fetch('/api/auth/verify', {
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(values)
    })
  
    notification.success({
      message: 'Email Sent',
      description:
        'Please check your email for a confirmation.',
    });
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<ValidateErrorEntity<string>>) => {
    notification.error({
      message: 'Error',
      description:
        'Error authenticating user. Please refresh the page and try again',
    });
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

export default Auth;