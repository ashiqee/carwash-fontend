import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import ReviewForm from './comp/ReviewForm';

const ReviewSection = () => {
  const reviewData = [
    {
      reviewText:
        'Great price and great service. Delivery and wash quality awesome',
      rating: 5,
      profileImg:
        'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY=',
      name: 'Camala',
    },
    {
      reviewText:
        'Great price and great service. Delivery and wash quality awesome',
      rating: 4,
      profileImg:
        'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
      name: 'Camala',
    },
    {
      reviewText:
        'Great price and great service. Delivery and wash quality awesome',
      rating: 5,
      profileImg:
        'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNS0zODUucG5n.png',
      name: 'Camala',
    },
  ];
  return (
    <div className="my-20 ">
      <div className="relative">
        <div className=" relative overflow-hidden min-h-[800px] xl:min-h-[650px]">
          <img
            className="hover:translate-x-5  overflow-hidden object-cover 
            translate-x-2 duration-1000 
            hover:ease-in-out hover:duration-1000"
            src="/src/assets/svg/testimonial_bg.png"
            alt=""
          />
  
          <div className="absolute top-1 px-4 md:px-0 md:left-[12%] xl:px-8  w-full 2xl:container 2xl:mx-auto text-3xl">
          <h3 className="text-center relative xl:right-32 text-primary font-bold md:text-4xl 2xl:text-6xl">
              What Our Clients Say
            </h3>

            <div className="py-10 w-full md:flex items-center    gap-10">
              <div className='  '>
<ReviewForm></ReviewForm>
              </div>
              <Carousel className="xl:w-full w-72 mx-auto  max-w-md">
                <CarouselContent>
                  {reviewData.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="mt-10 md:mt-0">
                        <Card className="rounded-t-[100px] rounded-b-[150px] bg-primary/80 text-white">
                          {
                            <CardContent className="flex flex-col p-6 gap-4 aspect-square items-center justify-center ">
                              <div className="flex">
                                {' '}
                                {Array.from({ length: item.rating }).map(
                                  (_, i) => (
                                    <Star
                                      className="text-rose-600 fill-rose-700"
                                      key={i}
                                    />
                                  ),
                                )}
                              </div>
                              <span className="xl:text-2xl text-[16px] text-center font-semibold">
                                {item.reviewText}
                              </span>
                              <div className="w-28 h-28 rounded-full">
                                <img
                                  className="object-cover min-h-28 rounded-full"
                                  src={item.profileImg}
                                  alt=""
                                />
                              </div>
                              <p className="xl:text-md  text-[14px]">{item.name}</p>
                            </CardContent>
                          }
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
