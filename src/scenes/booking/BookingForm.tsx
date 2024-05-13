import { Button, DatePicker, Form, FormProps, Input, InputNumber, Spin, notification } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useCallback, useState } from "react";

type FieldType = {
  firstName?: string;
  lastName?: string;
  guestsCount?: number;
  phone?: string;
  email?: string;
  datetime?: Dayjs;
};

export const BookingForm: React.FC = () => {
  const [form] = Form.useForm();

  const [loading, setIsLoading] = useState<boolean>(false);
  const onFinish = useCallback<NonNullable<FormProps<FieldType>['onFinish']>>((values) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      form.resetFields();
      notification.success({message: `Success`, description: `${values.firstName}, your reservation is created. We will send details to your email ${values.email}`})
    }, 3000)
  }, [form]);
  

  return (<Spin spinning={loading} tip="Creating reservation...">
    <Form
      form={form}
      name="booking"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input max={32} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input max={32} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: `Please enter valid email` },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Phone number"
        name="phone"
        rules={[
          { required: true, message: 'Please input your phone!' },
          { pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g, message: `Please enter valid phone` },
        ]}
      >
        <Input type="tel" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Number of guests"
        name="guestsCount"
        rules={[
          { required: true, message: 'Please input the number of guests!' },
        ]}
      >
        <InputNumber min={1} max={25} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Date & Time"
        name="datetime"
        rules={[
          { required: true, message: 'Please select the date and time!' },
        ]}
      >
        <DatePicker showTime={{ format: `h:mm a` }} minDate={dayjs().add(1, `day`)} format="YYYY-MM-DD" needConfirm={false} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Reserve
        </Button>
      </Form.Item>
    </Form>
  </Spin>);
}