import { SyntheticEvent } from "react";
import { Project } from "./Project";
import { useState } from "react";

interface ProjectFormProps {
  project?: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

const Projectform = ({
  project: initalProject,
  onCancel,
  onSave,
}: ProjectFormProps) => {
  const [project, setProject] = useState(initalProject);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(project as Project);
  };
  const handleChange = (event: SyntheticEvent) => {
    const { type, name, value, checked } = event.target as HTMLInputElement;
    let updatedValue : any = type === "checkbox" ? checked : value;
    if (type === "number") {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };
    let updatedProject: Project;
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
  };
  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        onChange={handleChange}
        value={project?.name}
      />
      <label htmlFor="description">Project Description</label>

      <textarea
        name="description"
        placeholder="enter description"
        onChange={handleChange}
        value={project?.description}
      ></textarea>
      <label htmlFor="budget">Project Budget</label>

      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        onChange={handleChange}
        value={project?.budget}
      />
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" checked={project?.isActive} onChange={handleChange} />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span></span>
        <button onClick={onCancel} type="button" className="bordered medium">
          cancel
        </button>
      </div>
    </form>
  );
};

export default Projectform;
