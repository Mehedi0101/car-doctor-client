import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row absolute">
                <div className="lg:w-1/2 relative">
                    <img className="w-3/4" src={person} alt="" />
                    <img className="absolute w-64 -bottom-10 right-10 border-8 border-white rounded" src={parts} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-lg text-orange-600 font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.
                        <br /><br />
                        the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.
                    </p>
                    <button className="btn btn-error text-white font-semibold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;