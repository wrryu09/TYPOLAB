type VarientsShowcaseProps = {
  varientArr: string[];
};

const VarientsShowcase = ({ varientArr }: VarientsShowcaseProps) => {
  return (
    <>
      {varientArr.map((ele, idx) => {
        return (
          <div key={ele + idx}>
            <style>
              {`.eleWeight${idx}{
font-weight: ${ele};
}
`}
            </style>
            <p className={`eleWeight${idx} fontFamily text-2xl text-right`}>
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
          </div>
        );
      })}
    </>
  );
};

export default VarientsShowcase;
