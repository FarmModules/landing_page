import 'tailwindcss/tailwind.css';

const About = () => {
  return (
    <div className="section-title-area p-8" id="About">
      <h2 className="section-title text-center text-3xl">About</h2>
      <div className="section-desc flex flex-col items-center">
        <div className="text-center">
          <div>
            We are a team of farmers, engineers, and entrepreneurs, trying to make aquaponics more accessible&nbsp;&#x1F421;&nbsp;&#x1F49A;&nbsp;&#x1F331;<br />
            So it takes less time and money to learn, build, and operate.
          </div>
          <p></p>
          <p>
            As&nbsp;
            <a href="https://cutt.ly/IYJ56bG" target="_blank" rel="noopener">
              certified aquaponics designers
            </a>,
            we can help you build / digitalize your own farm,<br />
            whether it is &ldquo;just&rdquo; a dream of yours or a running farm.
          </p>
        </div>
        <div>
          <h2 className="text-center">What is Aquaponics?</h2>
          <p>
            <img
              src="https://www.farmmodules.tech/wp-content/uploads/2022/02/272614969_277386991154127_1490115604891205562_n-1.png"
              alt="Aquaponics Cycle Concept"
              width={507}
              height={472}
            />
          </p>
        </div>
        <div className="text-center">
          Aquaponics is an organic, highly efficient farming method &ndash; inspired by nature,<br />
          it is working, thanks to the symbiosis between plants, fish, and bacteria.
        </div>
      </div>
    </div>
  );
};

export default About;
