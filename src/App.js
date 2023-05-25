import ClientTestimonial from "./components/ClientTestimonial/ClientTestimonial";
import CollectionSection from "./components/CollectionSection/CollectionSection";
import ContactUs from "./components/ContactUs/ContactUs";
import FeatureProjectSection from "./components/FeatureProjectSection/FeatureProjectSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProjectAmenitiesSection from "./components/ProjectAmenitiesSection/ProjectAmenitiesSection";
import ProjectHighlightSection from "./components/ProjectHighlightSection/ProjectHighlightSection";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CollectionSection />
      <ProjectAmenitiesSection />
      <FeatureProjectSection />
      <ProjectHighlightSection />
      <ClientTestimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}
