import { Layout, theme } from "antd"
import { Breadcrumbs } from "./Breadcrumbs";
import { BookingForm } from "./BookingForm";

export const BookingScene: React.FC = () => {  const {
    token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();
  
  return <Layout.Content style={{ padding: '0 48px' }}>
    <Breadcrumbs />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <BookingForm />
        </div>
      </Layout.Content>
}