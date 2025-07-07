'use client';

export default function PolicyTestimonialSection() {
  return (
    <div className="w-full bg-[#15191e] py-16 px-4">
      {/* Features Row */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
        <div className="flex flex-col items-center">
          {/* Icon: Document */}
          <svg width="24" height="24" fill="currentColor" className="mb-3 text-[#e8e9e3]">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 0C4.34315 0 3 1.34315 3 3V22.5V23.943L4.35112 23.4363L5.94282 22.8394L7.55279 23.6444L8 23.868L8.44721 23.6444L10 22.868L11.5528 23.6444L12 23.868L12.4472 23.6444L14 22.868L15.5528 23.6444L16 23.868L16.4472 23.6444L18.0572 22.8394L19.6489 23.4363L21 23.943V22.5V3C21 1.34315 19.6569 0 18 0H6ZM5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V21.057L18.3511 20.8137L17.9428 20.6606L17.5528 20.8556L16 21.632L14.4472 20.8556L14 20.632L13.5528 20.8556L12 21.632L10.4472 20.8556L10 20.632L9.55279 20.8556L8 21.632L6.44721 20.8556L6.05718 20.6606L5.64888 20.8137L5 21.057V3ZM14 6H10V4H14V6ZM16 10H8V8H16V10ZM8 14H16V12H8V14ZM12 18V16H16V18H12Z" />
          </svg>
          <span className="text-[#e8e9e3] text-base font-medium mt-2">
            P.O.-like approval flows for all<br />types of spend
          </span>
        </div>
        <div className="flex flex-col items-center">
          {/* Icon: Check in Circle */}
          <svg width="24" height="24" fill="currentColor" className="mb-3 text-[#e8e9e3]">
            <path d="M18.7071 8.70711L17.2929 7.29289L10 14.5858L6.70711 11.2929L5.29289 12.7071L10 17.4142L18.7071 8.70711Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
          </svg>
          <span className="text-[#e8e9e3] text-base font-medium mt-2">
            Clear visibility of why a<br />transaction is out of policy
          </span>
        </div>
        <div className="flex flex-col items-center">
          {/* Icon: Chat Bubble */}
          <svg width="32" height="32" fill="currentColor" className="mb-3 text-[#e8e9e3]">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.33337 2.66699C3.12424 2.66699 1.33337 4.45785 1.33337 6.66699V30.4917L11.0704 24.0003H26.6667C28.8758 24.0003 30.6667 22.2095 30.6667 20.0003V6.66699C30.6667 4.45785 28.8758 2.66699 26.6667 2.66699H5.33337ZM4.00004 6.66699C4.00004 5.93061 4.59699 5.33366 5.33337 5.33366H26.6667C27.4031 5.33366 28 5.93061 28 6.66699V20.0003C28 20.7367 27.4031 21.3337 26.6667 21.3337H4.00004V6.66699Z" />
          </svg>
          <span className="text-[#e8e9e3] text-base font-medium mt-2">
            Slack and WhatsApp<br />integration and expense<br />commenting
          </span>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* <img
          src="https://brand.brex.com/transform/44f64157-a674-44d0-b7ab-b373b0d008fc/DoorDash-White?io=transform:fit,width:2000,height:243&quality=95"
          alt="DoorDash Logo"
          className="h-10 mb-4"
          style={{ filter: 'brightness(0) invert(1)' }}
        /> */}
        <blockquote className="text-white text-2xl md:text-3xl font-light mb-6 leading-snug">
          “By making it easier for employees to comply, finance went from the bad cop to the hero.”
        </blockquote>
        <div className="text-[#e8e9e3] text-base mb-2">
          — <span className="underline">Mike Kim</span>, VP of Finance, DoorDash
        </div>
        <a href="#" className="text-[#033175] font-semibold text-base hover:underline">
          Read more &rarr;
        </a>
      </div>
    </div>
  );
}
