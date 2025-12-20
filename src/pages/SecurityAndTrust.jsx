import React from 'react';
import LayoutOther from '../components/layout/LayoutOther';

const SecurityAndTrust = () => {
  return (
    <LayoutOther
      heading={'Security & Trust'}
      subtext={
        'Enterprise-grade security and privacy-first design to keep your spatial data protected, compliant, and always secure.'
      }
    >
      <div className="w-full flex flex-col justify-center items-center gap-6 text-white px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col max-w-6xl w-full justify-start items-start">
          <Section title="Built for Enterprise. Secured for the Future.">
            <p className="mt-6 lg:mt-10">
              At Spatial Grid, trust is foundational to everything we build.
              From spatially intelligent AI agents to immersive XR environments,
              our commitment to security, privacy, and compliance runs deep —
              because we understand that the future of work demands not only
              innovation, but resilience.
            </p>
            <p className="mt-2">
              With over two decades of experience in enterprise technology, our
              team has engineered a platform that meets the highest standards of
              data protection, system integrity, and operational transparency.
            </p>
          </Section>
          <ListItem
            mt="mt-6 lg:mt-16"
            title="✅ Enterprise-Grade Security"
            title2="We apply industry-leading security practices across every layer of our platform:"
            list={[
              {
                value:
                  'End-to-End Encryption: All data in transit and at rest is encrypted using advanced cryptographic protocols (AES-256, TLS 1.3).',
              },
              {
                value:
                  'Zero Trust Architecture: Every access point is verified, every interaction authenticated — no assumptions, no gaps.',
              },
              {
                value:
                  'Granular Access Controls: Role-based permissions and multi-factor authentication (MFA) ensure only the right people access the right data.',
              },
            ]}
          />
          <ListItem
            mt="mt-6 lg:mt-10"
            title="🔐 Privacy-First by Design"
            title2="Our platform is engineered with privacy at its core:"
            list={[
              {
                title: 'Data Sovereignty & Residency Options',
                value:
                  'Choose where your data lives — we offer region-specific deployments to comply with global data regulations.',
              },
              {
                title: 'Minimal Data Retention',
                value:
                  'We collect only what we need, for only as long as needed. Your data is yours, always.',
              },
              {
                title: 'Compliance Ready',
                value:
                  'Spatial Grid aligns with major data protection frameworks including GDPR, CCPA, and ISO 27001 principle.',
              },
            ]}
          />
          <ListItem
            mt="mt-6 lg:mt-10"
            title="🛡️ Continuous Vigilance"
            title2="We don't just secure — we evolve:"
            list={[
              {
                title: 'Real-Time Threat Monitoring',
                value:
                  '24/7 monitoring, anomaly detection, and AI-assisted alerts protect your environments from emerging threats.',
              },
              {
                title: 'Regular Security Audits & Penetration Testing',
                value:
                  "We engage third-party experts to rigorously test and validate our platform's defenses.",
              },
              {
                title: 'Disaster Recovery & Business Continuity',
                value:
                  "We're always on. Our high-availability architecture and automated backups ensure zero data loss and rapid recovery.",
              },
            ]}
          />
          <ListItem
            mt="mt-10"
            title="🤝 Your Trust, Our Responsibility"
            title2="Spatial Grid exists at the intersection of physical and digital — and in that space, trust is everything. Whether you're deploying spatial AI across global teams or designing next-gen XR experiences, we're committed to giving you full confidence in the platform powering your transformation."
            title3="Security questions or compliance inquiries?"
            title4="Contact our security team at [security@spatialgrid.ai]"
          />
        </div>
      </div>
    </LayoutOther>
  );
};

const Section = React.memo(({ title, children }) => (
  <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="text-[#D8D8D8] font-jakarta tracking-tight text-lg sm:text-xl md:text-2xl lg:text-3xl">
      {title}
    </div>
    <div className="my-4 text-base sm:text-lg md:text-xl lg:text-xl">{children}</div>
  </div>
));

const ListItem = React.memo(({ title, title2, children, mt, list, title3, title4 }) => {
  return (
    <div className={`${mt} max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full`}>
      {title && <p className="text-base sm:text-lg lg:text-xl my-1">{title}</p>}
      {title2 && <p className="text-base sm:text-lg lg:text-xl my-1">{title2}</p>}
      {title3 && <p className="text-base sm:text-lg lg:text-xl my-1">{title3}</p>}
      {title4 && <p className="text-base sm:text-lg lg:text-xl my-1">{title4}</p>}
      <ul className="list-disc pl-4 md:pl-10">
        {children
          ? children
          : list && list.length > 0
          ? list.map((val, ind) => (
              <li key={ind} className="text-base sm:text-lg mt-1">
                {val?.title ? (
                  <>
                    <strong>{val?.title}</strong>
                    <div>{val?.value}</div>
                  </>
                ) : (
                  val?.value
                )}
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
});

export default SecurityAndTrust;
