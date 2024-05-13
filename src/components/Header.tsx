import { Layout, Menu } from "antd";

const items = [{key: 1, label: `Home`}, {key: 2, label: `Booking`}]

export const Header: React.FC = () => (<Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
  <div className="demo-logo" />
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['2']}
    items={items}
    style={{ flex: 1, minWidth: 0 }}
  />
</Layout.Header>);