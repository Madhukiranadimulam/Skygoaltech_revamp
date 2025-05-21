import AssociatedPartners from "./HomeSubSections/AssociatedPartners";
import MobileViewHomePage from "./HomeSubSections/MobileViewHomePage";
import SomeOfOurClients from "./HomeSubSections/SomeOfOurClients";
import Testimonials from "./HomeSubSections/Testimonials";
import WhyChooseSkyGoal from "./HomeSubSections/WhyChooseSkyGoal";

export default function Home() {

  return (
    <>
      <div className="w-full lg:hidden">
        <MobileViewHomePage />
      </div>
      <WhyChooseSkyGoal />
      <SomeOfOurClients />
      <Testimonials />
      <AssociatedPartners />
    </>
  );
}
