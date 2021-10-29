import Routes from './routes';
import { ToastContainer } from "react-toastify"
import HeaderComponent from './components/Header';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App;
