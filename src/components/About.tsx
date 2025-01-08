import photo from "/src/assets/photo.png";
const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <img src={photo} alt="About Us" className="rounded-2xl shadow-xl" />
          </div>

          <div className="mt-10 lg:mt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Code Triggered
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              At Code Triggered, we are a passionate and ambitious startup
              dedicated to delivering innovative technology solutions that
              empower businesses. Although we are new to the industry, our
              commitment to learning, creativity, and excellence drives us to
              provide high-quality services that cater to your unique needs. Our
              goal is to bridge the gap between technology and business growth
              by offering a range of services, including website development,
              mobile app creation, AI-powered chatbots, and intuitive
              dashboards. With a focus on user-centric design and efficiency, we
              aim to help our clients stay ahead in an ever-evolving digital
              world.
            </p>
            {/* <div className="grid grid-cols-2 gap-8">
              {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">1+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div> */}
            {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div> */}
            {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
                <p className="text-gray-600">Team Members</p>
              </div> */}
            {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
