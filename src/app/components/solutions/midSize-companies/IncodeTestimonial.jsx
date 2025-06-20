import React from "react";
import Carousel from "../../Carousel";

export default function IncodeTestimonial() {
    const slides = [
        {
          image: "https://brand.brex.com/transform/c6bad31c-e06e-434c-ba0d-d3c49293aa72/Business-travel-preview?io=transform:fit,width:2500,height:1313&quality=95",
          title: "Business travel reimagined: The modern way to do T&E",
          description: "It took a technology partnership and an overhaul of the entire process to create Brex travel, but business travel is finally good again.",
          link: "#",
          author: null,
          authorType: null
        },
        {
          image: "https://brand.brex.com/transform/9f056b79-6503-48d2-9e73-9b8bda87c8f1/AI-Powered-Spend-Management?io=transform:fit,width:2500,height:1313&quality=95",
          title: "Why finance leaders are embracing AI-powered spend management",
          description: "Some firms are using AI to increase control and ward off problems in finance and accounting. Are you?",
          link: "#",
          author: "OnlyCFO",
          authorType: "Guest Writer"
        },
        {
          image: "https://brand.brex.com/transform/e27b96b7-efbd-45c6-ba37-652ab052920b/kurtis-hanni-previewimage?io=transform:fit,width:2500,height:1313&quality=95",
          title: "AI, automation, and the future of accounting",
          description: "Will AI replace my accountants? Probably not, says this CFO, but look for accounting roles to become more specialized as AI and automation go into hyperdrive.",
          link: "#",
          author: "Kurtis Hanni",
          authorType: "Guest Writer"
        },
        {
          image: "https://brand.brex.com/transform/10b5c1e0-32dc-4f23-8afd-4ebea9db93bc/Frame-48097896?io=transform:fit,width:2500,height:1313&quality=95",
          title: "Most corporate travel solutions only solve half the problem",
          description: "Many T&E providers that began as travel tools are still trying to catch up on the expense side.",
          link: "#",
          author: null,
          authorType: null
        },
        {
          image: "https://brand.brex.com/transform/15aa4c44-1915-4742-a9e4-c67ef4f240c4/vineet-bb-thumbnail?io=transform:fit,width:2500,height:1313&quality=95",
          title: "Redefining travel for the modern company",
          description: "Managing T&E spend with one card, one app, and one integrated platform has been out of reach for many companies. Until now.",
          link: "#",
          author: null,
          authorType: null
        }
      ];
      
  return (
    <>
    <section className="w-full py-12 px-4 flex flex-col items-center bg-white">
      {/* Incode Logo */}
      <div className="mb-6 flex justify-center">
        <img
          src="https://brand.brex.com/transform/e8b524bf-4811-4501-b303-3c6ee601e92f/Incode-Logo?io=transform:fit,width:2000,height:500&quality=95"
          alt="Incode Logo"
          className="h-10 md:h-12 w-auto object-contain"
          loading="lazy"
        />
      </div>
      {/* Quote */}
      <blockquote className="max-w-3xl mx-auto text-center text-xl md:text-2xl text-gray-900 font-normal leading-snug mb-6">
        “Brex travel gives our employees easy access to great options and rates, and our policies are auto-enforced, so it's easy for them to book the air and hotel they want while staying in policy.”
      </blockquote>
      {/* Author */}
      <figcaption className="text-gray-700 text-base mt-2 text-center">
        — Juan Miguel Salazar Muñoz, Controlling Analyst, Incode
      </figcaption>
    </section>
    <Carousel 
    slides={slides} 
    title="Insights on travel and expense management." 
  />
    </>
  
  );
}
