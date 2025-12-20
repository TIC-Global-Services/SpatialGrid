import { Check } from 'lucide-react';
import NavbarComponent from '../components/HomePage/NavBarComponent';
import FooterSection from '../components/layout/FooterSection';

export default function PricingPage() {
  return (
    <div className="bg-[#121316] text-white min-h-screen flex flex-col">
      <NavbarComponent />

      {/* Main Content */}
      <div className="flex-grow w-full px-6 md:px-10 lg:px-16 xl:px-20 pt-32 md:pt-40">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">

          {/* Header Section */}
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#D8D8D8] font-semibold font-jakarta">
              Flexible Pricing, Tailored for Impact
            </h1>
            <p className="text-[#717173] text-[16px] md:text-lg">
              Adaptable Infrastructure for an Expanding Spatial Future
            </p>
            <p className="text-[#ffffff] text-sm md:text-base leading-relaxed">
              Whether you're piloting spatial workflows with a small team or
              rolling out immersive collaboration at enterprise scale, our
              pricing is designed to match your momentum — giving you the
              freedom to experiment, grow, and evolve without friction.
            </p>
          </div>

          {/* Start Exploring Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl text-[#717173] font-semibold font-jakarta">
              Start Exploring Your Spatial Future
            </h2>

            <div className="flex flex-col gap-6 text-sm md:text-base text-[#ffffff]">
              <div className="flex items-start gap-3">
                <span className="text-[#EE2B2A]">→</span>
                <div>
                  <p className="font-medium">Get Started</p>
                  <p>
                    Share a few quick details and we'll reach out to activate
                    your free 14-day trial — full access, no credit card required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#EE2B2A]">→</span>
                <div>
                  <p className="font-medium">Schedule a Demo</p>
                  <p>
                    Want to see it in action first? Book a time that works for you.
                    A product expert will guide you through a personalized walkthrough,
                    followed by trial access and onboarding support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl text-[#717173] font-semibold font-jakarta">
              What’s Included in the Trial?
            </h2>
            <ul className="list-none space-y-3 text-[#ffffff] text-sm md:text-base">
              {[
                'Full platform access — all features unlocked',
                'Multiplayer spatial collaboration with real-time presence',
                'Interactive views, spatial audio, and gesture input',
                'Persistent environments and team coordination tools',
                'Dedicated onboarding support throughout the experience',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#ffffff] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing That Aligns Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl text-[#717173] font-semibold font-jakarta">
              Pricing That Aligns With Your Goals
            </h2>
            <p className="text-[#ffffff] text-sm md:text-base">
              Our pricing adapts to your unique needs — whether you're looking
              to scale across teams, customize integrations, or deploy in
              secure enterprise environments. We work closely with every
              customer to understand:
            </p>
            <ul className="list-none space-y-3 text-[#ffffff] text-sm md:text-base">
              {[
                'Team size and roles',
                'Deployment scale and complexity',
                'Feature usage and API requirements',
                'Support and onboarding needs',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#ffffff] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#ffffff] text-sm md:text-base">
              Our collaborative approach ensures you're only paying for the
              value you're receiving — nothing more, nothing less.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
