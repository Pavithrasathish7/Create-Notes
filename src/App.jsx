import ProjectSide from "./componet/ProjectSide";
import NewProject from "./componet/NewProject";
import Noproject from "./componet/Noproject";
import { useState } from "react";
import SelectProject from "./componet/SelectProject";

function App() {
  const [projectstate, setProjectstate] = useState({
    selectprojectid: undefined,
    projects: [],
  });

  function selectHandle(id) {
    setProjectstate((prevstate) => {
      return { ...prevstate, selectprojectid: id };
    });
  }

  function handleCancel() {
    setProjectstate((prevstate) => {
      return { ...prevstate, selectprojectid: undefined };
    });
  }

  function handleStartproject() {
    setProjectstate((prevstate) => {
      return { ...prevstate, selectprojectid: null };
    });
  }

  function handledelete() {
    setProjectstate((prevstate) => {
      return {
        ...prevstate,
        selectprojectid: undefined,
        projects: prevstate.projects.filter(
          (project) => project.id != prevstate.selectprojectid
        ),
      };
    });
  }

  function handleAddproject(projectData) {
    setProjectstate((prevstate) => {
      const projectId = Math.random();
      const newproject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevstate,
        selectprojectid: undefined,
        projects: [...prevstate.projects, newproject],
      };
    });
  }

  //console.log(projectstate);

  const projectselect = projectstate.projects.find(
    (project) => project.id === projectstate.selectprojectid
  );

  let content = (
    <SelectProject projected={projectselect} ondelete={handledelete} />
  );

  if (projectstate.selectprojectid === null) {
    content = <NewProject onAdd={handleAddproject} onCancel={handleCancel} />;
  } else if (projectstate.selectprojectid === undefined) {
    content = <Noproject onStart={handleStartproject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSide
        onStart={handleStartproject}
        projects={projectstate.projects}
        handleselect={selectHandle}
      />
      {content}
    </main>
  );
}

export default App;
