import React from "react";
import Image from "next/image";
import GlassmorphicContainer from "../ui/GlassmorphicContainer";

const AboutUs = () => {
  return (
    <main className="relative  min-h-screen">
      
      <section className="w-full flex justify-between items-center 2xl:px-[15rem] px-[2rem] flex-col md:flex-row  text-center md:text-left">
        <div className="max-w-xl">
          <p className="text-3xl md:text-5xl font-bold">Building the Future of <br/> Digital Asset Inheritance</p>
          <p className="text-base md:text-[18px] font-light mt-4">InheritX is a blockchain-powered platform dedicated to redefining how digital assets are secured and passed down. We combine security, transparency, and automation to ensure your crypto and NFTs are protected for generations.</p>
        </div>
        <Image src="/about-1.png" alt="buildin the future" width={346} height={492} />        
      </section>

      <section className="w-full flex justify-between items-center 2xl:px-[15rem] px-[2rem]  flex-col md:flex-row  mt-10 gap-6">
        <GlassmorphicContainer className="2xl:w-[35rem] 2xl:h-[36rem] flex justify-center items-center rounded-3xl  w-full md:w-[30rem] h-auto md:h-[31rem]  p-4">

        <Image src="/about-2.png" alt="Our story" width={385} height={385} quality={90} className="2xl:w-[24rem] 2xl:h-[24rem] w-[22rem] h-[22rem]" />        
        </GlassmorphicContainer>
        <div className="2xl:max-w-[40rem]   max-w-full md:max-w-[38rem] text-center md:text-left">
          <GlassmorphicContainer className="w-[6.6rem] h-[1.9rem] rounded-full flex justify-center items-center mx-auto md:mx-0">
            <p className="text-sm font-normal">Our Story</p>
          </GlassmorphicContainer>
          <p className="2xl:text-[32px] text-xl md:text-3xl font-bold mt-[1rem]">From a Growing Need to a Secure Solution</p>
          <p className="text-base md:text-[18px] font-light mt-4">Founded by a team of blockchain experts at Skill Mind, InheritX was created to bridge the gap between traditional estate planning and the digital economy. We provide a secure, decentralized solution that ensures digital assets are protected, preserved, and passed on with efficiency and transparency.</p>
        </div>
      </section>

      <div className="w-full   flex  justify-center gap-x-[1.75rem] items-center 2xl:px-[15rem] px-[2rem]  my-[7rem] flex-col md:flex-row  gap-6">
        <GlassmorphicContainer className="p-6 md:p-8 w-full rounded-3xl">
        <h2 className="2xl:text-[28px] md:text-[24px] text-lg font-bold mb-2">
        Our Mission Is To{' '}
        <span className="text-[#3500AA]">
        Secure Digital Wealth for Generations
        </span>
      </h2>
      <p className="text-white text-sm md:text-base">
      We believe digital assets deserve the same trust, security, and transparency as traditional assets. InheritX is dedicated to building a decentralized inheritance platform that empowers users to protect and transfer their digital wealth with confidence.
      </p>
        </GlassmorphicContainer>

        <GlassmorphicContainer className="p-6 md:p-8 w-full rounded-3xl">
        <h2 className="2xl:text-[28px] md:text-[24px] text-lg font-bold mb-2">
        Our Vision Is To{' '}
        <span className="text-[#3500AA]">
          Make Digital Inheritance Seamless, Secure, And Automated.
        </span>
      </h2>
      <p className="text-white text-sm md:text-base">
        We envision a world where passing down cryptocurrencies and NFTs is 
        automated, secure, and effortless. By leveraging cutting-edge blockchain 
        technology, we aim to be the trusted partner for individuals, families, and 
        businesses in digital estate planning.
      </p>
        </GlassmorphicContainer> 
        </div>

        <section className="w-full   flex  justify-between items-center 2xl:px-[15rem] px-[2rem] flex-col md:flex-row gap-6">

        <div className="2xl:max-w-[40rem] max-w-full md:max-w-[38rem] text-center md:text-left">
          <GlassmorphicContainer className="w-[9.3rem] h-[1.9rem] rounded-full flex justify-center items-center mx-auto md:mx-0">
            <p className="text-sm font-normal">Our Core Values</p>
          </GlassmorphicContainer>
          <p className="2xl:text-[32px] md:text-3xl text-xl font-bold mt-[1rem]">The Principles Behind Our Commitment to<br/> Secure Digital Inheritance</p>
          <p className="md:text-[18px] text-base font-light mt-4">At InheritX, we uphold security, transparency, innovation, user-centricity, and compliance as core values. We prioritize robust security measures, ensure clear and verifiable processes, embrace cutting-edge blockchain advancements, and design intuitive experiences—all while adhering to the highest legal standards.</p>
        </div>
        <GlassmorphicContainer className="2xl:w-[35rem] 2xl:h-[36rem] w-full md:w-[30rem] h-auto md:h-[31rem] flex justify-center items-center rounded-3xl p-4">

        <Image src="/about-3.png" alt="Our core value" width={385} height={385} quality={90} className="2xl:w-[24rem] 2xl:h-[24rem] w-[22rem] h-[22rem]" />        
        </GlassmorphicContainer>
      </section>
        
    

    </main>
  );
};

export default AboutUs;
