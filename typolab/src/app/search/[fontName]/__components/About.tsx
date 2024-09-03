type AboutProps = {
  about: string;
};

const About = ({ about }: AboutProps) => {
  return (
    <div className="self-center text-center w-10/12">
      <h1 className={"subTitleStyle"}>ABOUT</h1>
      {about && <p dangerouslySetInnerHTML={{ __html: about }} />}
    </div>
  );
};

export default About;
