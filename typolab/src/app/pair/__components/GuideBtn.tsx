type GuideBtnProps = {
  onClick: () => void;
};

const GuideBtn = ({ onClick }: GuideBtnProps) => {
  return (
    <div
      className="px-12 py-4 bg-darkGreen hover:bg-red rounded-full justify-center items-center inline-flex"
      onClick={onClick}
    >
      <p className="mobile:text-4xl text-center text-white text-7xl font-['Bayon']">
        view guide
      </p>
    </div>
  );
};

export default GuideBtn;
