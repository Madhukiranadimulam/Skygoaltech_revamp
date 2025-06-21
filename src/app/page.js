import AssociatedPartners from "./HomeSubSections/AssociatedPartners";
import GetToKnowUs from "./HomeSubSections/GetToKnowUs";
import MobileViewHomePage from "./HomeSubSections/MobileViewHomePage";
import SomeOfOurClients from "./HomeSubSections/SomeOfOurClients";
import Testimonials from "./HomeSubSections/Testimonials";
import WhyChooseSkyGoal from "./HomeSubSections/WhyChooseSkyGoal";
import dynamic from "next/dynamic";

export default function Home() {

  return (
    <>
      <div className="w-full lg:hidden">
        <MobileViewHomePage />
      </div>
      <GetToKnowUs />
      <WhyChooseSkyGoal />
      <SomeOfOurClients />
      <Testimonials />
      <AssociatedPartners />
    </>
  );
}
