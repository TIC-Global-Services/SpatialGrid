import { termsConditionsData } from "../utils/constant";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#121316] text-white p-6 flex flex-col items-center justify-start">
      <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-6 text-center">
        Terms & Conditions
      </h2>

      <div className="w-full max-w-7xl bg-[#393939] p-6 md:p-8 rounded-lg shadow-lg h-[80vh] overflow-y-auto scrollbar">
        {termsConditionsData.map(({ id, title, content }) => (
          <section key={id} id={id} className="mx-auto mb-8">
            <h3
              className={`${
                id === 'introduction' || id === 'summary'
                  ? 'text-[clamp(1.25rem,2.5vw,2rem)] font-bold mb-4'
                  : 'text-[clamp(1rem,2vw,1.25rem)] font-semibold mb-3'
              }`}
            >
              {title}
            </h3>
            {content.map((para, idx) => (
              <p
                key={idx}
                className="text-[#FFF8F8] text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsConditions;
