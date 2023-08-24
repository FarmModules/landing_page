import Link from 'next/link';

const Team = () => {
  return (
    <div id="Team" className="container flex flex-col items-center">
      <h2 className="text-2xl text-center font-semibold mb-4">Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 w-90">
        {/* Martin Kubajda */}
        <div className="flex flex-col items-center">
          <Link href="https://www.linkedin.com/in/martin-kubajda/">
            <img
              src="https://www.farmmodules.tech/wp-content/uploads/2021/11/1618472157083-400x300.jpg"
              alt="Martin Kubajda, CEO"
              width="470"
              height="580"
             
            />
          </Link>
          <div className="mt-4 text-center">
            <h5 className="font-semibold">
              <Link href="https://www.linkedin.com/in/martin-kubajda/">
                Martin Kubajda, CEO
              </Link>
            </h5>
            <span>Product, vision, strategy</span>
          </div>
        </div>
        
        {/* Filip Fajkus */}
        <div className="flex flex-col items-center">
          <Link href="https://www.linkedin.com/in/filip-fajkus-a56295176/">
            <img
              src="https://www.farmmodules.tech/wp-content/uploads/2021/11/1555084982219-2.jpg"
              alt=""
              width="350"
              height="80"
              
            />
          </Link>
          <div className="mt-4 text-center">
            <h5 className="font-semibold">
              <Link href="https://www.linkedin.com/in/filip-fajkus-a56295176/">
                Filip Fajkus, COO
              </Link>
            </h5>
            <span>sales and operations</span>
          </div>
        </div>
        
        {/* Jiri Borovec */}
        <div className="flex flex-col items-center">
          <Link href="https://www.linkedin.com/in/jirka-borovec/">
            <img
              src="https://www.farmmodules.tech/wp-content/uploads/2021/11/jirka-367x300.jpg"
              alt=""
              width="360"
              height="200"
              
            />
          </Link>
          <div className="mt-4 text-center">
            <h5 className="font-semibold">
              <Link href="https://www.linkedin.com/in/jirka-borovec/">
                Jiri Borovec, Chief AI Scientist
              </Link>
            </h5>
            <span>machine learning, computer vision</span>
          </div>
        </div>
        
        {/* Peter Pribylina */}
        <div className="flex flex-col items-center">
          <Link href="https://www.linkedin.com/in/peter-pribylina-0a1b23bb/">
            <img
              src="/1599073822754.jpeg"
              alt=""
              width="270"
              height="100"
              
            />
          </Link>
          <div className="mt-2 text-center">
            <h5 className="font-semibold">
              <Link href="https://www.linkedin.com/in/aseta-shadrach-6360b7139/">
              Aseta Shadrach
              </Link>
            </h5>
            <span>Back-end Engineer , Data Engineer</span>
          </div>
        </div>
        
        {/* Aron Abraham */}
        <div className="flex flex-col items-center">
          <Link href="https://www.linkedin.com/in/aron-abraham/">
            <img
              src="/WhatsApp_1_.jpg"
              alt=""
              width="360"
              height="200"
              
            />
          </Link>
          <div className="mt-2 text-center">
            <h5 className="font-semibold">
              <Link href="https://www.linkedin.com/in/aron-abraham/">
                Aron Abraham
              </Link>
            </h5>
            <span>Front-end developer</span>
          </div>
        </div>
        
        {/* Marek Otýpka */}
        <div className="flex flex-col items-center">
          <Link href="https://www.linkedin.com/in/marek-otypka/">
            <img
              src="https://www.farmmodules.tech/wp-content/uploads/2022/07/175563858_10208346844385147_8622580602411343963_n-e1661945890827-420x300.jpg"
              alt=""
              width="370"
              height="200"
              
            />
          </Link>
          <div className="mt-2 text-center">
            <h5 className="font-semibold">
              <Link href="https://www.linkedin.com/in/marek-otypka/">
                Marek Otýpka, CBDO
              </Link>
            </h5>
            <span>Business development, sales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
