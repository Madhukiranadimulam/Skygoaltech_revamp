import AssociatedPartners from "./HomeSubSections/AssociatedPartners";
import SomeOfOurClients from "./HomeSubSections/SomeOfOurClients";
import Testimonials from "./HomeSubSections/Testimonials";
import WhyChooseSkyGoal from "./HomeSubSections/WhyChooseSkyGoal";

export default function Home() {
  return (
    <>
      <WhyChooseSkyGoal />
      <SomeOfOurClients />
      <Testimonials />
      <AssociatedPartners />
    </>
  );
}
