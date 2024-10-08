import Image from "next/image";
import Client from "@/app/Images/client.webp";
import {
  AWS,
  Angular,
  AWSdev,
  Azure,
  AzureDev,
  Datadog,
  Django,
  Docker,
  ElasticSearch,
  GoogleCloud,
  GoogleDev,
  Grafana,
  Java,
  Jenkins,
  Kubernetes,
  Laravel,
  Microsoftserver,
  Mongodb,
  Mysql,
  Nextjs,
  Nodejs,
  Php,
  Postgresql,
  Python,
  Reactjs,
  Ruby,
  RubyRails,
  Spring,
  Vue,
  Git,
  IntelliJ,
  Mocha,
  Jest,
  SVN,
  VScode,
  Selenium,
  PyCharm,
  JUnit
} from "@/app/Images";

export default function Home() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <section id="banner">
        <div className="w-full md:w-[1320px] mx-auto px-5 md:px-0">
          <div className="grid md:grid-cols-2 gap-3 pt-32 md:pt-44 pb-20">
            <div>
              <h1 className="text-[35px] md:text-[54px] font-bold md:leading-[64px] leading-normal pb-6 text-black">
                Top Custom Software Development Company
              </h1>
              <p className="text-[18px] pr-22 text-black">
                As a trusted custom software development company, we have
                completed over 50+ successful projects across various
                industries. Our startup delivers innovative, scalable software
                solutions for businesses of all sizes. With a focus on quality
                and customer satisfaction, we’re dedicated to turning your
                unique vision into reality.
              </p>
              <button className="bg-[#003366] text-lg text-white px-8 py-3 rounded-md mt-8 md:mt-14">
                Get your Free Quote
              </button>
            </div>
            <div>images</div>
          </div>
        </div>
      </section>

      <section id="service" className="bg-white">
        <div className="w-full md:w-[1320px] mx-auto px-5 md:px-0 py-12 md:py-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center pb-10 text-black">
              <span className="uppercase font-normal block text-base pb-2 tracking-[1px] text-black">
                Custom Software Solutions
              </span>
              Services
            </h2>
          </div>
          <div className="grid  md:grid-cols-3 gap-6 mx-0 md:mx-14">
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Tailored Software Solutions"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1.5 text-black">
                Tailored Software Solutions
              </h3>
              <p className="text-[15px] text-gray-700">
                We provide tailored software solutions that align with your
                unique business needs. Our team creates innovative applications
                that enhance efficiency and drive growth, ensuring you achieve
                your goals seamlessly.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="User Experience Design"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                User Experience Design
              </h3>
              <p className="text-[15px] text-gray-700">
                Our user experience design services focus on creating
                user-centric interfaces that enhance engagement. We combine
                aesthetics with functionality to deliver intuitive designs that
                provide an exceptional user experience.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Strategic Software Consulting"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                Strategic Software Consulting
              </h3>
              <p className="text-[15px] text-gray-700">
                Our strategic software consulting services offer guidance to
                help you navigate complex technology landscapes. We assess your
                needs and provide tailored solutions, ensuring your software
                investments drive business success.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Scalable Enterprise Solutions"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                Scalable Enterprise Solutions
              </h3>
              <p className="text-[15px] text-gray-700">
                We specialize in scalable enterprise solutions that grow with
                your organization. Our robust systems streamline processes and
                enhance collaboration, empowering businesses to thrive in a
                competitive landscape.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Mobile Application Development"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                Mobile Application Development
              </h3>
              <p className="text-[15px] text-gray-700">
                Our mobile application development services create engaging,
                high-performance apps for iOS and Android. We focus on
                delivering seamless user experiences, ensuring your app stands
                out in today’s mobile-driven world.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Innovative Web Solutions"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                Innovative Web Solutions
              </h3>
              <p className="text-[15px] text-gray-700">
                Our innovative web solutions encompass cutting-edge services
                that elevate your online presence. We build responsive,
                user-friendly websites that drive engagement and conversions,
                tailored to your business objectives.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Legacy Software Transformation"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                Legacy Software Transformation
              </h3>
              <p className="text-[15px] text-gray-700">
                Our legacy software transformation services modernize outdated
                systems into efficient solutions. We enhance functionality,
                security, and performance, ensuring your technology adapts to
                current market demands and user expectations.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Seamless Software Integration"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                Seamless Software Integration
              </h3>
              <p className="text-[15px] text-gray-700">
                Our seamless software integration services ensure connectivity
                between your applications. We streamline processes and data
                flow, enabling better collaboration and efficiency across your
                business ecosystem.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Expert Development Team"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                Expert Development Team
              </h3>
              <p className="text-[15px] text-gray-700">
                Hire our expert development team to enhance your project
                capabilities. Our skilled developers bring innovative solutions
                and technical expertise, allowing you to focus on your core
                business objectives while we handle the technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-white">
        <div className="w-full md:w-[1320px] mx-auto px-5 md:px-0 mt-5 md:mt-10 mb-12 md:mb-24">
          <div className="text-center bg-[#f4f8ff] rounded-xl py-9 md:py-14">
            <p className="text-3xl  md:text-5xl font-medium text-black pb-6">
              Build Customized Software Solutions
            </p>
            <span className="text-gray-700 text-base pb-10 block mx-4 md:mx-0">
              Ready to bring your vision to life? Together, we’ll develop
              personalized, scalable software that meets your unique <br />
              requirements and exceeds expectations. Let’s collaborate to
              validate your idea and turn it into reality!
            </span>
            <button className="bg-[#003366] text-lg text-white px-8 py-3 rounded-md  inline-block">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </section>

      <section id="clientlove" className="bg-white">
        <div className="w-full md:w-[1320px] mx-auto px-5  ">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center pb-6 md:pb-16 text-black">
              <span className="uppercase font-normal block text-base pb-2 tracking-[1px] text-black">
                Clients Love
              </span>
              Your Compnay Technologies
            </h2>
          </div>
          <div className="block md:flex items-center">
            <div className="w-full md:max-w-[58.33%]">
              <p className="description mb-5 text-black text-base pr-0 md:pr-20">
                [Your Company Name] developed a customized project management
                system specifically designed for our engineering team. This
                robust system enables our 28 engineers to effectively monitor
                progress across 75 concurrent projects. With essential features
                such as Gantt chart scheduling and automated notifications,
                we’ve seen a remarkable 19% reduction in average project
                duration, significantly enhancing our operational efficiency.
                The detailed analytics dashboard provides crucial insights into
                project bottlenecks, allowing us to optimize resource allocation
                and improve overall project management.
              </p>
              <div className="flex items-center flex-row">
                <div className="userfedd-detbox justify-content-between">
                  <div className="flex items-center  gap-2 text-black">
                    <p className="text-lg font-medium text-black">
                      Jeffrey Hall
                    </p>
                    <Image
                      src="https://www.spaceotechnologies.com/wp-content/uploads/2023/06/Rating.svg"
                      alt="review-star"
                      width="82"
                      height="13"
                    />
                  </div>
                  <p className="text-sm text-gray-700">
                    Founder &amp; CEO, Tech Firm
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[41.66%] hidden md:block ">
              <Image src={Client} alt="review-star" width="375" height="300" />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mt-16 md:mt-24 md:mb-16 bg-white">
        <div className="w-full md:w-[1320px] mx-auto px-5  ">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center pb-10 text-black">
              <span className="uppercase font-normal block text-base pb-2 tracking-[1px] text-black">
                Our Innovative Software Solutions
              </span>
              Portfolio
            </h2>
          </div>
          <div className="grid md:grid-cols-2 items-center mt-0 md:mt-12">
            <div className="block md:hidden ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Glovo-Android-App.jpg"
                alt="Glovo Android App"
                width={500}
                height={300}
                className="text-center mx-auto"
              />
            </div>
            <div className="pr-0 md:pr-12 pt-4 md:pt-0">
              <h3 className="text-xl font-medium mb-3 md:mb-6 text-black">
                Developed On-demand Food Delivery App That Secured
              </h3>
              <p className="text-base text-black">
                Glovo is one of the unicorn (secured $1.2 Billion funding) apps
                developed by Space-O Technologies. Apple chose Glovo for its
                “Best of 2016” award. This online marketplace app offers
                multi-category grocery product delivery and has over 30 million
                app downloads. TechCrunch, Financial Times, and Bloomberg have
                covered this application.
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Glovo-Android-App.jpg"
                alt="Glovo Android App"
                width={500}
                height={300}
                className="text-center mx-auto"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 items-center mt-12">
            <div>
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Glovo-Android-App.jpg"
                alt="Glovo Android App"
                width={500}
                height={300}
                className="text-center mx-auto"
              />
            </div>
            <div className="pt-4 md:pt-0">
              <h3 className="text-xl font-medium mb-3 md:mb-6 text-black">
                Developed On-demand Food Delivery App That Secured
              </h3>
              <p className="text-base text-black">
                Glovo is one of the unicorn (secured $1.2 Billion funding) apps
                developed by Space-O Technologies. Apple chose Glovo for its
                “Best of 2016” award. This online marketplace app offers
                multi-category grocery product delivery and has over 30 million
                app downloads. TechCrunch, Financial Times, and Bloomberg have
                covered this application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="develop"
        className="mt-12 md:mt-24 mb-8 py-10 md:py-14 bg-[#f6f8fb]"
      >
        <div className="w-full md:w-[1320px] mx-auto px-5 ">
          <div className="block md:flex items-center">
            <div className="w-full md:w-1/3 pb-6 md:pb-0">
              <div className="text-center md:text-left ">
                <h2 className="text-4xl font-semibold  pb-6 text-black">
                  <span className="uppercase font-normal block text-base pb-2 tracking-[1px] text-black">
                    Software Solutions
                  </span>
                  We Develop
                </h2>
                <p className="text-black">
                  Our experienced software developers build custom solutions,
                  cloud software, & websites to help you stay ahead. Explore the
                  list of software solutions that we develop.
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0 mb-[18px] mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="ERP Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Enterprise resource planning software
                  </p>
                </div>
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0 mb-[18px] mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="CRM Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Customer relationship management software
                  </p>
                </div>
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0 mb-[18px] mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="HRM Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Human resource management software
                  </p>
                </div>
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0 mb-[18px] mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="CMS Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Content management system
                  </p>
                </div>
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0 mb-[18px] mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="LMS Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Learning management software
                  </p>
                </div>
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0 mb-[18px] mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="Fleet Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Fleet management software
                  </p>
                </div>
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0 mb-[18px] mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="SaaS Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Software as a Service Solution
                  </p>
                </div>
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0 mb-[18px] mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="SCM Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Supply chain management software
                  </p>
                </div>
                <div className="bg-white inline-flex flex-col items-start gap-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative mt-0  mx-[9px] p-4 rounded-xl">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="PM Icon"
                    width={48}
                    height={24}
                  />
                  <p className="text-base font-medium text-black">
                    Project management software
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="bg-white">
        <div className="w-full md:w-[1320px] mx-auto px-5 pt-5 md:pt-14 md:pb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center pb-8 md:pb-16 text-black">
              <span className="uppercase font-normal block text-base pb-2 tracking-[1px] text-black">
                Why Choose
              </span>
              Your Compnay Technologies for Software Development?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 ">
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Tailored Software Solutions"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                300+ Software Projects Developed
              </h3>
              <p className="text-[15px] text-gray-700">
                We have developed over 300 end-to-end software solutions
                spanning web, mobile, cloud, AI, ML, and emerging technologies.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="User Experience Design"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                1200+ Clients Worldwide
              </h3>
              <p className="text-[15px] text-gray-700">
                We have served over 1200 satisfied clients across healthcare,
                finance, retail, aviation, and various other industries
                worldwide.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Strategic Software Consulting"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                140+ In-house Software Developers
              </h3>
              <p className="text-[15px] text-gray-700">
                Our 140+ skilled software engineers and developers specialize in
                full-stack web, mobile app, API, cloud-based and enterprise
                solution delivery.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Scalable Enterprise Solutions"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                14+ Years of Experience
              </h3>
              <p className="text-[15px] text-gray-700">
                With 14+ years of experience since our start in 2010, we have
                honed our software development capabilities across the entire
                project lifecycle.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Mobile Application Development"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                98% Success Score on Upwork
              </h3>
              <p className="text-[15px] text-gray-700">
                We have successfully delivered over 1000 software development
                projects with an excellent 98% client satisfaction rate on
                Upwork.
              </p>
            </div>
            <div className="service-card text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Innovative Web Solutions"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">
                100% Project Transparency
              </h3>
              <p className="text-[15px] text-gray-700">
                We ensure complete transparency through tools for real-time
                progress tracking, daily updates, scope change approvals, and
                robust documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="mb-0 md:mb-8 py-14  bg-white">
        <div className="w-full md:w-[1320px] mx-auto px-5 ">
          <div className="block md:flex gap-10">
            <div className="w-full md:w-1/3 bg-[#f6f8fb] min-h-[calc(100%_-_24px)] flex flex-col justify-center p-[34px] rounded-2xl">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold  pb-6 text-black">
                  Industries We <br />
                  Serve
                </h2>
                <p className="text-black">
                  Whether you’re in healthcare, retail, or any field in between,
                  we deliver solutions that cater to the specific challenges and
                  demands of your business.
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/3 pt-6 md:pt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="ERP Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />
                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Healthcare
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="CRM Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Retail
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="HRM Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Finance
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="CMS Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Education
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="LMS Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Real-estate
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="Fleet Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Manufacturing
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="SaaS Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Transportataion
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="SCM Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Enterainment
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="PM Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Hospitality
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="PM Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Travel
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="PM Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Legal
                  </p>
                </div>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]  relative p-7 rounded-xl text-center border border-[#EAF3FF]">
                  <Image
                    src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Enterprise-resource-planning-software.svg"
                    alt="PM Icon"
                    width={64}
                    height={24}
                    className="mx-auto"
                  />

                  <p className="text-base font-medium  pt-3 text-gray-800">
                    Contruction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="bg-[#f6f8fb]">
        <div className="w-full md:w-[1320px] mx-auto px-5  pt-10 md:pt-20 pb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center pb-7 tex-black text-black">
              <span className="uppercase font-normal block text-base pb-2 tracking-[1px] text-black">
                Software Development
              </span>
              Methodologies We Use
            </h2>
            <p className="text-center mb-10 text-black">
              We use these methodologies to ensure optimal software <br />
              development tailored to your requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 ">
            <div className="bg-white text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Tailored Software Solutions"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1.5 text-black">Agile</h3>
              <p className="text-[15px] text-gray-700">
                This flexible development approach adapts to changes as your
                project evolves. With Agile, you’ll experience rapid delivery of
                high-quality software, ensuring that your product meets market
                demands in real time.
              </p>
            </div>
            <div className="bg-white text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="User Experience Design"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">DevOps</h3>
              <p className="text-[15px] text-gray-700">
                DevOps practice is designed to enhance collaboration and
                efficiency throughout your project’s lifecycle. You benefit from
                continuous delivery, ensuring a faster time-to-market and
                improved product quality.
              </p>
            </div>
            <div className="bg-white text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Strategic Software Consulting"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">Scrum</h3>
              <p className="text-[15px] text-gray-700">
                Scrum methodology is used for managing complex software
                development through iterative progress. With Scrum, you’ll
                receive regular feedback loops, ensuring that your product
                remains aligned with user needs.
              </p>
            </div>
            <div className="bg-white text-center border px-4 py-10 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <Image
                src="https://www.spaceotechnologies.com/wp-content/uploads/2023/08/Custom-Software-Development.svg"
                alt="Scalable Enterprise Solutions"
                width={50}
                height={50}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-medium py-1 text-black">Waterfall</h3>
              <p className="text-[15px] text-gray-700">
                Every stage of your project is meticulously planned and
                executed, providing clarity and precision. With Waterfall, each
                phase is completed before progressing to the next, ensuring a
                systematic development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white">
        <div className="w-full md:w-[1320px] mx-auto px-5 pt-10 md:pt-20 pb-8 md:pb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center pb-10 text-black">
              <span className="uppercase font-normal block text-base pb-2 tracking-[1px] text-black">
                Our Software Development
              </span>
              Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 ">
            <div className=" border p-8 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <p className="text-5xl text-gray-300 font-semibold pb-1">01</p>
              <h3 className="text-xl font-medium py-3 text-black">
                Requirement Analysis
              </h3>
              <p className="text-[15px] text-gray-700">
                Understand your needs, objectives, and the challenges the
                software aims to address.
              </p>
            </div>
            <div className=" border p-8 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <p className="text-5xl text-gray-300 font-semibold pb-1">02</p>
              <h3 className="text-xl font-medium py-3 text-black">
                Planning & Design
              </h3>
              <p className="text-[15px] text-gray-700">
                Draft a detailed plan and create a blueprint, covering
                architecture, user interface, and user experience.
              </p>
            </div>
            <div className=" border p-8 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <p className="text-5xl text-gray-300 font-semibold pb-1">03</p>
              <h3 className="text-xl font-medium py-3 text-black">
                Development
              </h3>
              <p className="text-[15px] text-gray-700">
                Code software, ensuring each module aligns with the design and
                functions seamlessly.
              </p>
            </div>
            <div className=" border p-8 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <p className="text-5xl text-gray-300 font-semibold pb-1">04</p>
              <h3 className="text-xl font-medium py-3 text-black">Testing</h3>
              <p className="text-[15px] text-gray-700">
                Rigorously evaluate the software for bugs, performance issues,
                and reliability.
              </p>
            </div>
            <div className=" border p-8 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <p className="text-5xl text-gray-300 font-semibold pb-1">05</p>
              <h3 className="text-xl font-medium py-3 text-black">
                Deployment
              </h3>
              <p className="text-[15px] text-gray-700">
                Launch the software in a live environment, making it accessible
                to end-users.
              </p>
            </div>
            <div className=" border p-8 rounded-xl border-solid border-[#EAF3FF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] ">
              <p className="text-5xl text-gray-300 font-semibold pb-1">06</p>
              <h3 className="text-xl font-medium py-3 text-black">
                Maintenance & Support
              </h3>
              <p className="text-[15px] text-gray-700">
                Provide ongoing support, addressing any updates, issues, or
                improvements to keep the software optimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-white">
        <div className="w-full md:w-[1320px] mx-auto px-5 mt-10 mb-12 md:mb-24">
          <div className="text-center bg-[#003366] rounded-xl py-10 md:py-14">
            <p className="text-3xl md:text-5xl font-medium text-white pb-6">
              Build Customized Software Solutions
            </p>
            <span className="text-white text-base pb-10 block mx-4 md:mx-0">
              Ready to bring your vision to life? Together, we’ll develop
              personalized, scalable software that meets your unique <br />
              requirements and exceeds expectations. Let’s collaborate to
              validate your idea and turn it into reality!
            </span>
            <button className="bg-white text-lg text-black px-8 py-3 rounded-md  inline-block font-semibold">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </section>

      <section id="technology" className="bg-[#f6f8fb]">
        <div className="w-full md:w-[1320px] mx-auto px-5 pt-20 pb-0 md:pb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center pb-7 text-black">
              <span className="uppercase font-normal block text-base pb-2 tracking-[1px] text-black">
                SOFTWARE DEVELOPMENT
              </span>
              Technology Stack
            </h2>
          </div>

          <div className="block md:flex items-start mt-0 mb-[30px] mx-0 pb-[15px] border-b-[#e7e7e7] border-b border-solid">
            <div className=" w-1/5 mb-4 md:mb-0">
              <p className="text-lg font-medium text-black">
                Programming <br />
                Languages
              </p>
            </div>
            <div className="w-full md:w-4/5">
              <ul className="flex flex-wrap mb-0">
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Java /> Java
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Python /> Python
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Ruby />
                  Ruby
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Php /> PHP
                </li>
              </ul>
            </div>
          </div>

          <div className="block md:flex items-start mt-0 mb-[30px] mx-0 pb-[15px] border-b-[#e7e7e7] border-b border-solid">
            <div className="w-1/5 mb-4 md:mb-0">
              <p className="text-lg font-medium text-black">Frameworks</p>
            </div>
            <div className="w-full md:w-4/5">
              <ul className="flex flex-wrap mb-0">
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Reactjs />
                  React.js
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Angular />
                  Angular.Js
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Vue/>
                  Vue.js{" "}
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Nextjs />
                  Next.js{" "}
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Django />
                  Django{" "}
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Spring />
                  Spring Boot{" "}
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <RubyRails />
                  Ruby on Rails{" "}
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Laravel />
                  Laravel{" "}
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Nodejs />
                  Node.js{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="block md:flex items-start mt-0 mb-[30px] mx-0 pb-[15px] border-b-[#e7e7e7] border-b border-solid">
            <div className="w-1/5 mb-4 md:mb-0">
              <p className="text-lg font-medium text-black">Databases</p>
            </div>
            <div className="w-full md:w-4/5">
              <ul className="flex flex-wrap mb-0">
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Mysql /> MySQL
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Mongodb /> MongoDB
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Postgresql /> PostgreSQL
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Microsoftserver /> Microsoft SQL Server
                </li>
              </ul>
            </div>
          </div>

          <div className="block md:flex items-start mt-0 mb-[30px] mx-0 pb-[15px] border-b-[#e7e7e7] border-b border-solid">
            <div className="w-1/5 mb-4 md:mb-0">
              <p className="text-lg font-medium text-black">DevOps</p>
            </div>
            <div className="w-full md:w-4/5">
              <ul className="flex flex-wrap mb-0">
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Docker /> Docker
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Kubernetes /> Kubernetes
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <AWSdev /> AWS Developer Tools
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Jenkins /> Jenkins
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <AzureDev /> Azure DevOps
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <GoogleDev /> Google Developer Tools
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Datadog /> Datadog
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Grafana /> Grafana
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <ElasticSearch /> Elastic Search
                </li>
              </ul>
            </div>
          </div>

          <div className="block md:flex items-start mt-0 mb-[30px] mx-0 pb-[15px] border-b-[#e7e7e7] border-b border-solid">
            <div className="w-1/5 mb-4 md:mb-0">
              <p className="text-lg font-medium text-black">Cloud Platforms</p>
            </div>
            <div className="w-full md:w-4/5">
              <ul className="flex flex-wrap mb-0">
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <AWS />
                  AWS
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Azure />
                  Azure
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <GoogleCloud />
                  Google Cloud
                </li>
              </ul>
            </div>
          </div>

          <div className="block md:flex items-start mt-0 mb-[30px] mx-0 pb-[15px] border-b-[#e7e7e7] border-b border-solid">
            <div className="w-1/5 mb-4 md:mb-0">
              <p className="text-lg font-medium text-black">Version Control</p>
            </div>
            <div className="w-full md:w-4/5">
              <ul className="flex flex-wrap mb-0">
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Git /> Git
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <SVN /> SVN
                </li>
              </ul>
            </div>
          </div>

          <div className="block md:flex items-start mt-0 mb-[30px] mx-0 pb-[15px] border-b-[#e7e7e7] border-b border-solid">
            <div className="w-1/5 mb-4 md:mb-0">
              <p className="text-lg font-medium text-black">IDEs</p>
            </div>
            <div className="w-full md:w-4/5">
              <ul className="flex flex-wrap mb-0">
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <IntelliJ /> IntelliJ IDEA
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <VScode /> Visual Studio Code
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <PyCharm /> PyCharm
                </li>
              </ul>
            </div>
          </div>

          <div className="block md:flex items-start mt-0 mb-[30px] mx-0 pb-[15px] border-b-[#e7e7e7] border-b border-solid">
            <div className="w-1/5 mb-4 md:mb-0">
              <p className="text-lg font-medium text-black">
                Testing <br />
                Frameworks
              </p>
            </div>
            <div className="w-full md:w-4/5">
              <ul className="flex flex-wrap mb-0">
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Selenium /> Selenium
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <JUnit /> JUnit
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Jest /> Jest
                </li>
                <li className="h-10 text-base flex items-center shadow-[0_0_10px_rgba(0,0,0,0.05)] mt-0 mb-[15px] mx-[5px] px-4 py-0 rounded-[30px] bg-white text-black gap-2.5">
                  <Mocha /> Mocha
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
