import Blue_waves from '@/components/svg/Blue_waves';


const FeaturesSection = () => {
  const featureds = [
    {
      icon: '/src/assets/svg/hand_washing.svg',
      title: '100% Hand Washing',
      discription: `Our full service wash and detailing treat-
ments cover every surface of your vehicle`,
    },
    {
      icon: '/src/assets/svg/interior_detailing.svg',
      title: 'Interior Detailing',
      discription: `Interior Detailing
Interior detailing treatments bring life to
your interior surfaces and remove`,
    },
    {
      icon: '/src/assets/svg/coffee_shop.svg',
      title: 'Healthy Coffee Shop',
      discription: `Enjoy organic and fresh meals with a deli-
cious cup of coffee, tea or any other drinks.`,
    },
    {
      icon: '/src/assets/svg/full_service_dry.svg',
      title: 'Full Service Dry',
      discription: `Using compressed air and specialized mi-
cro-fiber hand towels, our team clears
every crevice and ensures a spot-free dr`,
    },
    {
      icon: '/src/assets/svg/express_detailing.svg',
      title: 'Express Detailing',
      discription: `Our express detailing treatments not only
look great, they protect and extend the life
of your vehicle's surfaces.`,
    },
    {
      icon: '/src/assets/svg/comfortable_waiting_area.svg',
      title: 'Comfortable Waiting Area',
      discription: `Relax and enjoy the fresh air, picturesque view, and free WiFi while we make your vehicle look new again.`,
    },
  ];

  return (
    <div className=" ">
      {/* <img src="/src/assets/svg/turquoise_blue_waves.svg" className='fill-current text-primary' alt="" />
            <div className='bg-button-gradient min-h-[400px]'>

            </div> */}
      <div className="relative">
        <Blue_waves />
        <div className="bg-button-gradient relative overflow-hidden  max-h-[550px]">
          <img
            className="hover:translate-x-5  overflow-hidden object-cover translate-x-2 duration-1000 hover:ease-in-out hover:duration-1000"
            src="/src/assets/svg/bg.svg"
            alt=""
          />

          <div className="absolute top-14 2xl:left-[5%] xl:px-8  w-full 2xl:container 2xl:mx-auto text-3xl">
            <h3 className="text-center text-white font-bold text-6xl">
              Full-Service While You Wait
            </h3>

            <div className="py-10 grid grid-cols-3 items-center justify-center   gap-4">
              {featureds.map((item, i) => (
                <div
                  key={i}
                  className="flex mb-6  gap-4 shadow-2xl p-4 rounded-xl hover:scale-105 hover:duration-700 min-h-28  mx-auto  text-white items-center"
                >
                  <img className="w-20 invert" src={item.icon} alt="" />
                  <div className="w-96">
                    <h4 className="text-2xl font-semibold">{item.title}</h4>
                    <p className="text-sm text-justify text-gray-300">
                      {item.discription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rotate-180">
          <Blue_waves />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
