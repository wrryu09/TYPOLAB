type LicenseProps = {
  license: string;
};

const License = ({ license }: LicenseProps) => {
  return (
    <div className="self-end mb-20">
      <h1 className={"subTitleStyle"}>LICENSE</h1>
      <h1 className={"subTitleStyle text-red"}>{license}</h1>
      {license === "ofl" && (
        <div>
          <p>These fonts are licensed under the Open Font License.</p>
          <p>
            You can use them in your products & projects – print or digital,
            commercial or otherwise.
          </p>
          <p>
            This isn&apos;t legal advice, please consider consulting a lawyer
            and see the full license for all details.
          </p>
        </div>
      )}
    </div>
  );
};

export default License;
