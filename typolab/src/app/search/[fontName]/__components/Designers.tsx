type DesignersProps = {
  designers: {
    name: string;
    bio: string;
    imageUrl: string;
  }[];
};

const Designers = ({ designers }: DesignersProps) => {
  return (
    <div className="self-start mb-20">
      <h1 className="subTitleStyle">DESIGNERS</h1>
      {designers && (
        <>
          {designers.map((data) => {
            return (
              <div key={data.name}>
                {data.imageUrl && (
                  <img
                    alt="designer image"
                    src={data.imageUrl}
                    className="w-1/12 pb-4"
                  />
                )}
                <p
                  dangerouslySetInnerHTML={{ __html: data.name }}
                  className="w-5/12 pb-2"
                ></p>
                {data.bio && (
                  <p
                    dangerouslySetInnerHTML={{ __html: data.bio }}
                    className="w-5/12 pb-12"
                  ></p>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Designers;
