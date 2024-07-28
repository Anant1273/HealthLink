import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AppointmentBooking from './components/BookAppointment'
import LabTests from './components/LabTest';
import ImageComponent from './components/ImageComponent';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import BgImg from './components/BgImg';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Services />
      <AppointmentBooking/>
      <LabTests/>
      <br/>
      <BgImg/>
      <br/>
      <ImageComponent/>
      <ReviewSection/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
