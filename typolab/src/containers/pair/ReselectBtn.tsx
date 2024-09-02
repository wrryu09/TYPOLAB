type ReselectBtnProps = {
  resetFonts: () => void;
};

const ReselectBtn = ({ resetFonts }: ReselectBtnProps) => {
  return (
    <div
      className="hover:bg-red hover:border-darkGreen self-start text-darkGreen border-2 bg-lightGrey border-greenGrey font-semibold text-xl px-4 py-2 mb-10 rounded-full"
      onClick={resetFonts}
    >
      다시 선택하기
    </div>
  );
};

export default ReselectBtn;
