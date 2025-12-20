import BackgroundWrapper from "./BackgroundWrapper";

const HeroSection = () => {
  return (
    <BackgroundWrapper className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      {/* Multiple children – all inside the glowing wrapper */}
      <p className="text-sm text-gray-400 tracking-widest mb-4">Business Ready Features</p>
      
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Spatial Engineering has never been easier.
      </h1>
      
      <p className="text-lg text-gray-300 max-w-4xl mb-12">
        Our Visual Editor offers scalable infrastructure for millions of users, 
        industry-ready templates for quick deployment, enterprise-grade security, 
        seamless cross-platform integration, precision mapping for real-world accuracy, 
        and fully customizable solutions for diverse business needs.
      </p>

      {/* Bottom toolbar example */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-full px-6 py-4 flex items-center gap-6 border border-gray-800">
        <button className="text-gray-400 hover:text-white">Scene</button>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-800 rounded"><span>A+</span></button>
          {/* Add more icons */}
        </div>
        <button className="px-4 py-2 bg-red-600 text-white rounded-full text-sm">Present</button>
      </div>
    </BackgroundWrapper>
  );
};

export default HeroSection;