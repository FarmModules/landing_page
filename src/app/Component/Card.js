import Image from "next/image";

const Card = () => {
  return (
    <div id="Solution">
      <div className="flex flex-col items-center p-8">
        <h2 className="text-center">Solutions</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="feature-item">
              <div className="feature-media">
                <span className="icon-image">
                  <Image
                    src="https://www.farmmodules.tech/wp-content/uploads/2021/11/towery.png"
                    alt="FarmModules.tech AQP Towers system"
                    width="1432"
                    height="236"
                  />
                </span>
              </div>
              <h4 className="text-center">AQP Towers</h4>
              <div className="feature-item-content">
                <p>Aquaponic farm for your home, restaurant or school</p>
                <p>
                  <span>
                    {" "}
                    ✔️ Up to <strong>80 herbs</strong>, strawberries or salads
                    per <strong>1 square meter</strong>{" "}
                  </span>
                </p>
                <p>
                  <span>
                    {" "}
                    ✔️ Always <strong>fresh</strong>, in{" "}
                    <strong>organic quality</strong>, at home{" "}
                  </span>
                </p>
                <p>
                  <span>
                    {" "}
                    ✔️ <strong>Easy maintenance</strong>{" "}
                  </span>
                </p>
                <p>
                  <span> </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="feature-item">
              <div className="feature-media">
                <span className="icon-image">
                  <Image
                    src="https://www.farmmodules.tech/wp-content/uploads/2022/02/product-page-2.png"
                    alt=""
                    width="1432"
                    height="236"
                  />
                </span>
              </div>
              <h4 className="text-center">Aquaponics Intelligence</h4>
              <div className="feature-item-content">
                <p>
                  IoT <span> solution for Aquaponic Farmers </span>
                </p>
                <p>
                  <span>
                    {" "}
                    ✔️ Thanks to the <strong>camera and sensors</strong>, you
                    can <strong>check the health of your farm anywhere.</strong>{" "}
                  </span>
                </p>
                <p>
                  <span>
                    {" "}
                    ✔️ With <strong>automation</strong>, we allow you to{" "}
                    <strong>
                      remotely control lights, pH +/- solutions, fish feeders
                      and other
                    </strong>{" "}
                    equipment that your farm contains.{" "}
                  </span>
                </p>
                <p>
                  <span>
                    {" "}
                    ✔️ In case of impending complications,{" "}
                    <strong>
                      the application will notify you by email or phone
                    </strong>{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="feature-item">
              <div className="feature-media">
                <span className="icon-image">
                  <Image
                    src="https://www.farmmodules.tech/wp-content/uploads/2022/02/AAAAAAAAAAAAAAAAAA.jpg"
                    alt="Turn-key Aquaponics Towers Farm"
                    width="1432"
                    height="236"
                  />
                </span>
              </div>
              <h4 className="text-center">Commercial Farm</h4>
              <div className="feature-item-content">
                <p>
                  <span> Turnkey aquaponic farm solutions </span>
                </p>
                <p>
                  <span>
                    {" "}
                    ✔️ Our team is engaged in building, operating and
                    distributing products from AQP farms. As an investor, you
                    have a{" "}
                  </span>
                </p>
                <p>
                  <span>
                    {" "}
                    ✔️{" "}
                    <strong>
                      Stable, organic and high quality cultivation all year
                      round
                    </strong>
                    , thanks to aquaponics and our IoT platform Aquaponics
                    Intelligence ..{" "}
                  </span>
                </p>
                <p>
                  <span>
                    {" "}
                    ✔️ <strong>Return on investment is 2 to 5 years</strong>,
                    depending on crops and location{" "}
                  </span>
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
