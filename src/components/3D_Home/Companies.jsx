import StarBorder from '../Reusable/StarBorder';
import { imagePath } from '../../utils/imagePath';

const Companies = () => {
  const LogoCloud = [
    { name: 'Brand Power', image: imagePath.BrandPower },
    { name: 'Medha', image: imagePath.Medha },
    { name: 'Ministry of Defence', image: imagePath.MinistryOfDefence },
    { name: 'Raghava', image: imagePath.Raghava },
    { name: 'ISRO', image: imagePath.ISRO },
    { name: 'SCCL', image: imagePath.SCCL },
    { name: 'NRSC', image: imagePath.NRSC },
    { name: 'RST', image: imagePath.RST },
    { name: 'Creme21', image: imagePath.Creme21 },
    { name: 'Americana', image: imagePath.Americana },
    { name: 'Life Sciences', image: imagePath.LifeSciences },
  ];

  const row1 = LogoCloud.slice(0, 5);
  const row2 = LogoCloud.slice(5, 9);
  const row3 = LogoCloud.slice(9, 11);

  return (
    <div className="py-10 min-h-screen bg-black">
      {/* HEADER */}
      <div className="max-w-5xl text-center mx-auto space-y-4">
        <StarBorder color="red" thickness={1.5} speed="4s">
          Companies Using
        </StarBorder>

        <h1 className="text-3xl md:text-5xl font-telegraf font-medium text-white">
          Spatial Grid
        </h1>
      </div>

      {/* ================= MOBILE (3-COLUMN GRID) ================= */}
      <div className="mt-16 grid grid-cols-3 gap-6 place-items-center md:hidden">
        {LogoCloud.map((company, idx) => (
          <img
            key={idx}
            src={company.image}
            alt={company.name}
            className="w-24 object-contain opacity-90 hover:opacity-100 transition"
          />
        ))}
      </div>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block mt-16 space-y-10">
        {/* ROW 1 – 5 logos */}
        <div className="flex justify-center gap-12">
          {row1.map((company, idx) => (
            <img
              key={idx}
              src={company.image}
              alt={company.name}
              className="w-40 object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* ROW 2 – 4 logos */}
        <div className="flex justify-center gap-14">
          {row2.map((company, idx) => (
            <img
              key={idx}
              src={company.image}
              alt={company.name}
              className="w-40 object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* ROW 3 – 2 logos */}
        <div className="flex justify-center gap-16">
          {row3.map((company, idx) => (
            <img
              key={idx}
              src={company.image}
              alt={company.name}
              className="w-40 object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
