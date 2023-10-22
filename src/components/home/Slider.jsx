import slider1 from "../../assets/images/banner/1.jpg";
import slider2 from "../../assets/images/banner/2.jpg";
import slider3 from "../../assets/images/banner/3.jpg";
import slider4 from "../../assets/images/banner/4.jpg";
import slider5 from "../../assets/images/banner/5.jpg";
import slider6 from "../../assets/images/banner/6.jpg";


const Slider = () => {
    return (
        <div className="carousel w-full h-[80vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full object-top object-cover rounded-xl" />
                <div className="absolute flex items-center h-full gap-3 text-white bg-gradient-to-r from-[#151515cc] to-[#1515152f] w-full">
                    <div className="space-y-4 w-2/5 ml-14">
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-2">
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full object-top object-cover rounded-xl" />
                <div className="absolute flex items-center h-full gap-3 text-white bg-gradient-to-r from-[#151515cc] to-[#1515152f] w-full">
                    <div className="space-y-4 w-2/5 ml-14">
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-2">
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full object-top object-cover rounded-xl" />
                <div className="absolute flex items-center h-full gap-3 text-white bg-gradient-to-r from-[#151515cc] to-[#1515152f] w-full">
                    <div className="space-y-4 w-2/5 ml-14">
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-2">
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full object-top object-cover rounded-xl" />
                <div className="absolute flex items-center h-full gap-3 text-white bg-gradient-to-r from-[#151515cc] to-[#1515152f] w-full">
                    <div className="space-y-4 w-2/5 ml-14">
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-2">
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <img src={slider5} className="w-full object-top object-cover rounded-xl" />
                <div className="absolute flex items-center h-full gap-3 text-white bg-gradient-to-r from-[#151515cc] to-[#1515152f] w-full">
                    <div className="space-y-4 w-2/5 ml-14">
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-2">
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <img src={slider6} className="w-full object-top object-cover rounded-xl" />
                <div className="absolute flex items-center h-full gap-3 text-white bg-gradient-to-r from-[#151515cc] to-[#1515152f] w-full">
                    <div className="space-y-4 w-2/5 ml-14">
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-2">
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;