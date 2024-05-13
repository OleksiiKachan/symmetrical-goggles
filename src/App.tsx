import { Layout } from 'antd';

import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingScene } from './scenes/booking';

const App: React.FC = () => (<Layout style={{ height: `100%` }}>
  <Header />
  <BookingScene />
  <Footer />
</Layout>);

export default App;
