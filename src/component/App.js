import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Details from './Details';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({});

  const onHide = () => setShow(false);
  function onShow(item) { 
    setDetail(item)
    setShow(true)
  }

  return (
    <>
      <Header />
      <Main onShow={onShow} />
      <Footer />

      <Details show={show} onHide={onHide} detail={detail} />
    </>
  );
}

export default App;
