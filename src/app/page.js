'use client';

import { useEffect, useState } from "react";
import AssociatedPartners from "./HomeSubSections/AssociatedPartners";
import MobileViewHomePage from "./HomeSubSections/MobileViewHomePage";
import SomeOfOurClients from "./HomeSubSections/SomeOfOurClients";
import Testimonials from "./HomeSubSections/Testimonials";
import WhyChooseSkyGoal from "./HomeSubSections/WhyChooseSkyGoal";
import InstantCallBackModal from "./HomeSubSections/InstantCallBackModal";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const hasShownModal = localStorage.getItem('modalShown');
    // console.log("Has Modal Open", typeof hasShownModal, hasShownModal);
    try {
      if (hasShownModal === "true") {
        setModalOpen(false);
        localStorage.setItem('modalShown', "false");
        return;
      } else if (hasShownModal === "false") {
        console.log("Else cond")
        setModalOpen(true);
        localStorage.setItem('modalShown', "true");
      }
    } catch (error) {
      console.log("Error", error);
    }
  }, []);

  // console.log("Modal Open", modalOpen)

  return (
    <>
      <div className="w-full lg:hidden">
        <MobileViewHomePage />
      </div>
      <WhyChooseSkyGoal />
      <SomeOfOurClients />
      <Testimonials />
      <AssociatedPartners />
      {modalOpen && (
        <InstantCallBackModal
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}
