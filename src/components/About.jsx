import { ABOUT } from "../constants";
const About = () => {
  return (
    <div className="container mx-auto" id="about">
        <h2 className="mt-20 text-center text-4xl font-semibold">About</h2>
        <h3 className="p-6 text-6xl upppercase lg:text-[8rem]">{ABOUT.text1}</h3>
        <p className="mr-24 pl-4 text-lg leading-loose">{ABOUT.text2}</p>
    </div>
  )
}

export default About