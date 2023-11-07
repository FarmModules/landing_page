import "tailwindcss/tailwind.css";

const Card = () => {
  return (
    <div id="Solution">
      <div className="text-center p-4">
        <h2 className="text-3xl p-2">Solutions</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="p-4">
              <img src="/towers2.jpg" alt="FarmModules.tech AQP Towers system" width="1672" height="436" />
            </div>
            <h2 className="text-center p-4 text-2xl">AQP Towers</h2>
            <div className="text-left">
              <h4 className="text-xl">Aquaponic farm for your home, restaurant or school</h4>
              <div className="flex">
                ✔️
                <p className="text-justifyn pl-2">
                  Up to <strong>80 herbs</strong>, strawberries or salads per <strong>1 square meter</strong>
                </p>
              </div>
              <div className="flex">
                ✔️
                <p className="text-justify pl-2">
                  Always <strong>fresh</strong>, in <strong>organic quality</strong>, at home
                </p>
              </div>
              <div className="flex">
                ✔️
                <p className="text-justify pl-2">
                  <strong>Easy maintenance</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="p-2">
              <img src="/aquaponics_intelligence.png" alt="" width="1432" height="236" />
            </div>
            <h2 className="text-center p-4 text-2xl">Aquaponics Intelligence</h2>
            <div>
              <h4 className="text-xl">IoT solution for Aquaponic Farmers</h4>
              <div className="flex">
                ✔️
                <p className="text-justify pl-2">
                  Thanks to the <strong>camera and sensors</strong>, you can{" "}
                  <strong>check the health of your farm anywhere.</strong>
                </p>
              </div>
              <div className="flex">
                ✔️
                <p className="text-justify pl-2">
                  With <strong>automation</strong>, we allow you to{" "}
                  <strong>remotely control lights, pH +/- solutions, fish feeders and other</strong> equipment that your
                  farm contains.
                </p>
              </div>
              <div className="flex">
                ✔️
                <p className="text-justify pl-2">
                  In case of impending complications, <strong>the application will notify you by email or phone</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="p-2">
              <img src="/farma-1.jpeg" alt="Turn-key Aquaponics Towers Farm" width="1432" height="236" />
            </div>
            <h2 className="text-center p-4 text-2xl">Commercial Farm</h2>
            <div>
              <h4 className="text-xl">Turnkey aquaponic farm solutions</h4>
              <div className="flex">
                ✔️
                <p className="text-justify pl-2">
                  Our team is engaged in building, operating and distributing products from AQP farms. As an investor,
                  you have a
                </p>
              </div>
              <div className="flex">
                ✔️{" "}
                <p className="text-justify pl-2">
                  <strong>Stable, organic and high quality cultivation all year round</strong>, thanks to aquaponics and
                  our IoT platform Aquaponics Intelligence ..
                </p>
              </div>
              <div className="flex">
                ✔️
                <p className="text-justify pl-2">
                  <strong>Return on investment is 2 to 5 years</strong>, depending on crops and location
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
