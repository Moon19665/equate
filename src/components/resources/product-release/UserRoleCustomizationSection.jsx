'use client'
import { useEffect, useRef, useState } from "react";

export default function UserRoleCustomizationSection() {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0, 1 (half), 2 (full)

  useEffect(() => {
    const video = videoRef.current;
    const handleTimeUpdate = () => {
      const percentage = video.currentTime / video.duration;
      if (percentage < 0.5) setProgress(0);
      else if (percentage >= 0.5 && percentage < 1) setProgress(1);
      else setProgress(2);
    };

    video?.addEventListener("timeupdate", handleTimeUpdate);
    return () => video?.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="bg-white py-12 px-4">
      

      {/* Orange Progress Bar */}
      <div className="max-w-6xl mx-auto mb-6 border-b border-gray-200 relative">
        <div className="absolute top-full h-1 bg-orange-500 transition-all duration-700"
          style={{
            width: progress === 0 ? "0%" : progress === 1 ? "50%" : "100%",
            left: 0,
          }}
        />
      </div>

      {/* Role Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        <div>
          <h3 className="font-semibold text-lg text-[#111]">
            Create new user roles with granular permissions.{" "}
            <span className="text-xs text-green-700 ml-2 bg-green-100 px-1 rounded">Early Access</span>
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Create, define, and provision custom roles with fine-grained permissions to read, create,
            and update any object on Equate.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-[#111]">
            Audit all roles and permissions in one place.{" "}
            <span className="text-xs text-green-700 ml-2 bg-green-100 px-1 rounded">Early Access</span>
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Track all available roles at your company, audit who has access to the role, and adjust the
            permissions accordingly.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <a href="#" className="text-[#033176] font-medium hover:underline">
          Learn more about custom roles →
        </a>
      </div>
    </section>
  );
}
