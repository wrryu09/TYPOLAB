"use client";

import React from "react";

const SearchRes = ({ params }: { params: { fontName: string } }) => {
  return <div>{params.fontName}</div>;
};

export default SearchRes;
