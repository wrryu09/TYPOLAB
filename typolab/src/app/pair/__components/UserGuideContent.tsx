import getGptGuide from "@/services/apis/getGptGuide";
import { FontInfoFromDB } from "@/types/types";
import React from "react";

type UserGuideContentProps = {
  selectedFirstInfo: FontInfoFromDB;
  selectedScndInfo: FontInfoFromDB;
};

const UserGuideContent = ({
  selectedFirstInfo,
  selectedScndInfo,
}: UserGuideContentProps) => {
  const guide = React.use(getGptGuide(selectedFirstInfo, selectedScndInfo));

  return <p>{guide.data && guide.data}</p>;
};

export default UserGuideContent;
