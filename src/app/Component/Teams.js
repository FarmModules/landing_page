import Link from 'next/link';
import Image from 'next/image';
import aronImage from '../../../public/WhatsApp_1_.jpg';
const Team = () => {
  return (
    <div className="container flex flex-col items-center p-8" id="Team">
      <div className="section-title-area">
        <h2 className="section-title">Team</h2>
      </div>
      <div className="team-members grid grid-cols-3 gap-4">
        <div className="team-member wow slideInUp">
          <div className="member-thumb">
            <Link
              href="https://www.linkedin.com/in/martin-kubajda/"
              style={{ textDecoration: "none" }}
            >
              <Image
                src="https://www.farmmodules.tech/wp-content/uploads/2021/11/1618472157083-400x300.jpg"
                alt="Martin Kubajda, CEO"
                width="400"
                height="300"
              />
            </Link>
          </div>
          <div className="member-info">
            <h5 className="member-name">
              <Link href="https://www.linkedin.com/in/martin-kubajda/" style={{ textDecoration: "none" }} className="text-gray-500">
                Martin Kubajda, CEO
              </Link>
            </h5>
            <span className="member-position">Product, vision, strategy</span>
          </div>
        </div>
        <div className="team-member wow slideInUp">
          <div className="member-thumb">
            <Link
              href="https://www.linkedin.com/in/filip-fajkus-a56295176/"
              style={{ textDecoration: "none" }} className="text-gray-500"
            >
              <Image
                src="https://www.farmmodules.tech/wp-content/uploads/2021/11/1555084982219-2.jpg"
                alt=""
                width="381"
                height="163"
                className='p-8'
              />
            </Link>
          </div>
          <div className="member-info">
            <h5 className="member-name">
              <Link
                href="https://www.linkedin.com/in/filip-fajkus-a56295176/"
                style={{ textDecoration: "none" }} className="text-gray-500"
              >
                Filip Fajkus, COO
              </Link>
            </h5>
            <span className="member-position">sales and operations</span>
          </div>
        </div>
        <div className="team-member wow slideInUp">
          <div className="member-thumb">
            <Link
              href="https://www.linkedin.com/in/jirka-borovec/"
              style={{ textDecoration: "none" }}
            >
              <Image
                src="https://www.farmmodules.tech/wp-content/uploads/2021/11/jirka-367x300.jpg"
                alt=""
                width="367"
                height="300"
              />
            </Link>
          </div>
          <div className="member-info">
            <h5 className="member-name">
              <Link href="https://www.linkedin.com/in/jirka-borovec/" style={{ textDecoration: "none" }} className="text-gray-500">
                Jiri Borovec, Chief AI Scientist
              </Link>
            </h5>
            <span className="member-position">
              machine learning, computer vision
            </span>
          </div>
        </div>
        <div className="team-member wow slideInUp">
          <div className="member-thumb">
            <Link
              href="https://www.linkedin.com/in/peter-pribylina-0a1b23bb/"
              style={{ textDecoration: "none" }}
            >
              <Image
                src="https://www.farmmodules.tech/wp-content/uploads/2022/01/71179342_3323728047639090_2381459052375834624_n1-480x300.jpg"
                alt=""
                width="480"
                height="300"
              />
            </Link>
          </div>
          <div className="member-info">
            <h5 className="member-name">
              <Link
                href="https://www.linkedin.com/in/peter-pribylina-0a1b23bb/"
                style={{ textDecoration: "none" }} className="text-gray-500"
              >
                Peter Pribylina, CEO - Slovakia
              </Link>
            </h5>
            <span className="member-position">Product, sales, community</span>
          </div>
        </div>
        <div className="team-member wow slideInUp">
          <div className="member-thumb">
            <Link
              href="https://www.linkedin.com/in/aron-abraham/"
              style={{ textDecoration: "none" }}
            >
              <Image
                src={aronImage}
                alt=""
                width="350"
                height="300"
              />
            </Link>
          </div>
          <div className="member-info">
            <h5 className="member-name">
              <Link
                href="https://www.linkedin.com/in/aron-abraham/"
                style={{ textDecoration: "none" }} className="text-gray-500"
              >
                Aron Abraham
              </Link>
            </h5>
            <span className="member-position">Front-end developer</span>
          </div>
        </div>
        <div className="team-member wow slideInUp">
          <div className="member-thumb">
            <Link
              href="https://www.linkedin.com/in/marek-otypka/"
              style={{ textDecoration: "none" }}
            >
              <Image
                src="https://www.farmmodules.tech/wp-content/uploads/2022/07/175563858_10208346844385147_8622580602411343963_n-e1661945890827-420x300.jpg"
                alt=""
                width="370"
                height="200"
              />
            </Link>
          </div>
          <div className="member-info">
            <h5 className="member-name">
              <Link
                href="https://www.linkedin.com/in/marek-otypka/"
                style={{ textDecoration: "none" }} className="text-gray-500"
              >
                Marek Otýpka, CBDO
              </Link>
            </h5>
            <span className="member-position">Business development, sales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
