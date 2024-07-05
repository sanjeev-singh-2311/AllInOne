import "./Electrician.css";
import React from 'react'
import Typewriter from 'typewriter-effect';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Electrician = (props) => {
    new Typewriter('#typewriter', {
        strings: ['Hello', 'World'],
        autoStart: true,
    });

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }
    return (
        <div className="w-100vw">
            <div className=" w-[1200px] mx-auto">
                <div className="hero-section-heading hero-section-sub-heading flex mt-5">
                    E
                    <Typewriter
                        options={{
                            strings: ['lectrician'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <p className="mt-[70px] text-[40px] font-bold" > Most Booked Services </p>
                <div className='mt-[10px]'>
                    <div className='mt-[10px]'>
                        <Slider {...settings}>
                            {dataRecent.map((d) => (
                                <div className='bg-white h-[260px] text-black rounded-xl' >
                                    <div className='  flex justify-center items-center  '>
                                        <img src={d.img} alt="new" className='' />
                                    </div>
                                    <p className="text-[22px] ml-4 mt-2 "> {d.title}</p>
                                    <p className="text-[18px] ml-5 text-green-400 "> {d.rating}</p>
                                    <p className="text-[18px] ml-5 "> {d.price}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>


                <p className="mt-[30px] text-[40px] font-bold" > AC Related Services </p>
                <div className=''>
                    <div className='mt-[10px]'>
                        <Slider {...settings}>
                            {dataRecent.map((d) => (
                                <div className='bg-white h-[260px] text-black rounded-xl' >
                                    <div className='  flex justify-center items-center'>
                                        <img src={d.img} alt="new" className='' />
                                    </div>
                                    <p className="text-[22px] ml-4 mt-2 "> {d.title}</p>
                                    <p className="text-[18px] ml-5 text-green-400  "> {d.rating}</p>
                                    <p className="text-[18px] ml-5 "> {d.price}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>


                <p className="mt-[30px] text-[40px] font-bold" > Fan Light Related Services </p>
                <div className='mt-[10px]'>
                    <div className='mt-[10px]'>
                        <Slider {...settings}>
                            {dataRecent.map((d) => (
                                <div className='bg-white h-[260px] text-black rounded-xl' >
                                    <div className='  flex justify-center items-center '>
                                        <img src={d.img} alt="new" className='' />
                                    </div>
                                    <p className="text-[22px] ml-4 mt-2 "> {d.title}</p>
                                    <p className="text-[18px] ml-5 text-green-400 "> {d.rating}</p>
                                    <p className="text-[18px] ml-5 "> {d.price}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <p className="mt-[30px] text-[40px] font-bold" > Washing Machine Related Services </p>
                <div className='mt-[10px]'>
                    <div className='mt-[10px]'>
                        <Slider {...settings}>
                            {dataRecent.map((d) => (
                                <div className='bg-white h-[260px] text-black rounded-xl' >
                                    <div className='  flex justify-center items-center  '>
                                        <img src={d.img} alt="new" className='' />
                                    </div>
                                    <p className="text-[22px] ml-4 mt-2 "> {d.title}</p>
                                    <p className="text-[18px] ml-5 text-green-400 "> {d.rating}</p>
                                    <p className="text-[18px] ml-5 "> {d.price}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>



            </div>
        </div>


    )
}

/* TODO -> Change cards to match this schema
class JobCreate(BaseModel):

    name: str = Field(description="Name of the worker")
    experience: str = Field(description="Experience -> 1Y, 3Y, 10Y+ etc")
    expertise: str = Field(description="The type of job expertise ")

    cost_lower: float = Field(description="The lower limit of charges", gt=0)
    cost_upper: float = Field(description="The upper limit of charges", gt=0)

    time_slots: List[datetime] = Field(
        description="All the Time slots with date and time"
    )


class JobInfo(JobCreate):
    rating: float = Field(description="Rating out of 5", gt=0.0, lt=5.0)

    availabe_time_slots: List[datetime] = Field(
        description="Available Time slots with date and time"
    )
    locations: List[str] = Field(
        description="Locations where the jobs are available"
    )
*/
const dataRecent = [
    {
        img: 'images/ac.png',

        title: `AC Repair (split / window`,
        rating: `4.83 (200k)`,
        price: `₹ 249`
    },

    {
        img: 'images/ac.png',

        title: `Washing Machine Repair`,
        rating: `4.7 (150k)`,
        price: `₹ 199`
    },

    {
        img: 'images/ac.png',

        title: `TV Repair`,
        rating: `4.9 (350k)`,
        price: `₹ 249`
    },

    {
        img: 'images/ac.png',

        title: `Mixer Grinder Repair`,
        rating: `4.4 (100k)`,
        price: `₹ 149`
    },

    {
        img: 'images/ac.png',

        title: `Fan Repair`,
        rating: `4.7 (150k)`,
        price: `₹ 149`
    },
    {
        img: 'images/ac.png',

        title: `Fan Repair`,
        rating: `4.7 (150k)`,
        price: `₹ 149`
    },
    {
        img: 'images/ac.png',

        title: `Fan Repair`,
        rating: `4.7 (150k)`,
        price: `₹ 149`
    }
]

export default Electrician
