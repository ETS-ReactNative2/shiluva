import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowLeft, ArrowRight } from "react-feather";
import {
  ProjectsContainer,
  TitleHolder,
  ProTitleHolder,
  ProjectsHolder,
  ProjectCard,
  ProjectImage,
} from "../styles/Containers";

import img1 from "../Images/img1.jpg";
import netha from "../Images/netha.png";
import chuck from "../Images/chuck.png";
import ikageng from "../Images/ikageng.png";
import lebone from "../Images/lebone.png";
import loqdown from "../Images/loqdown.png";
import todo from "../Images/to-do.png";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function ScrollThingie() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <ProjectCard
        onClick={() => window.open("https://chuck-joke.web.app", "_blank")}
      >
        <ProjectImage src={chuck}></ProjectImage>
      </ProjectCard>

      <ProjectCard
        onClick={() => window.open("https://www.lebonemedia.co.za/", "_blank")}
      >
        <ProjectImage src={lebone}></ProjectImage>
      </ProjectCard>

      <ProjectCard
        onClick={() => window.open("https://my-to-do-f8d2c.web.app", "_blank")}
      >
        <ProjectImage src={todo}></ProjectImage>
      </ProjectCard>

      <ProjectCard
        onClick={() => window.open("https://www.ikgabo.co.za/", "_blank")}
      >
        <ProjectImage src={ikageng} alt=""></ProjectImage>
      </ProjectCard>

      <ProjectCard
        onClick={() =>
          window.open("http://websitetestlebonemedia.co.za/", "_blank")
        }
      >
        <ProjectImage src={loqdown}></ProjectImage>
      </ProjectCard>

      <ProjectCard
        onClick={() => window.open("https://netha.co.za/", "_blank")}
      >
        <ProjectImage src={netha}></ProjectImage>
      </ProjectCard>
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <ArrowLeft disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </ArrowLeft>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <ArrowRight disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </ArrowRight>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default ScrollThingie;
