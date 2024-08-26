
import Banner from './Section/Banner';
import FeaturesSection from './Section/FeaturesSection';
import ReviewSection from './Section/ReviewSection';
import ServicesSection from './Section/ServicesSection';


const HomePage = () => {


 

  return (
    <div className="space-y-20  ">
      <Banner />
      <ServicesSection/>
      <FeaturesSection/>
      <ReviewSection/>
    </div>
  );
};

export default HomePage;
