// import { Clock, Monitor } from "lucide-react";
import { useState } from 'react';
import { iconsPath, imagePath } from '../../utils/imagePath';

export default function SpatialgridDemoBooking({
  selectedDate,
  selectedTime,
  handleScheduleClick,
  showForm,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex-[0.7] max-h-[360px] max-w-[300px] overflow-auto scrollbar">
      <div className=" ">
        <div className="flex gap-4 flex-col items-left  ">
          <h1 className="text-[20px] font-bold text-[#ffffff] font-jakarta">
            Schedule a Demo
          </h1>

          <h1 className="text-[14px] font-normal text-white">
            Spatialgrid Product Demo
          </h1>
          <span className="text-[#ffffff] font-jakarta font-semibold">
            30 min
          </span>
        </div>
      </div>
      <div className="h-[1px] bg-white bg-opacity-75 mt-2 "></div>
      {/* Details section */}
      <div className="my-4">
        <div className="flex items-start space-x-2 text-white mb-4">
          {/* <Monitor size={18} className="mt-1" /> */}
          <span className="font-normal min-w-[260px] text-[14px]">
            Web conferencing details provided upon confirmation.
          </span>
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-4">
            <p className="text-white text-[14px]">
              Glad to know you're interested in Spatialgrid.
            </p>

            <p className="text-white text-[14px]">
              To better assist you, we'd like to learn about your requirements.
              Get into our personalized demo, where we'll walk you through how
              our platform can help you realize your ideas.
            </p>

            <p className="text-white text-[14px]">
              You are just a click away. Let us discuss your needs and our
              solutions.
            </p>
          </div>
        )}

        <div className="mt-4 border-t pt-3">
          <button
            className="text-[#D9232A] hover:underline text-sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show less' : 'Learn more'}
          </button>
        </div>
      </div>
      {selectedDate && selectedTime && !showForm && (
        <div
          className=" hidden lg:flex justify-center items-center mt-20   p-[10px] rounded-[10px]"
          style={{ backgroundColor: '#D9232A' }}
        >
          <button
            className="text-[#F5F5F5] text-[18px] w-full"
            onClick={handleScheduleClick}
          >
            Schedule Demo
          </button>
        </div>
      )}
      {(!selectedDate || !selectedTime) && !showForm && (
        <div className=" hidden lg:flex justify-center items-center mt-20 mb-4 bg-[#36373B]  p-[10px] rounded-[10px]">
          <button className="text-[#F5F5F5] text-[18px]" disabled>
            Schedule Demo
          </button>
        </div>
      )}
    </div>
  );
}
