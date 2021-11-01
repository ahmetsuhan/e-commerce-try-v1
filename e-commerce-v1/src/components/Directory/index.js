import React from "react";
import MenuItem from "../MenuItem";

import { useSelector } from "react-redux";
import { selectDirectorySection } from "../../redux/Directory/directorySelector";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => {
  const sections = useSelector(selectDirectorySection);
  console.log(sections);

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </DirectoryMenuContainer>
  );
};

export default Directory;
