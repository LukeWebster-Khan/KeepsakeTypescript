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
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project as Project);
  };
  const handleChange = (event: SyntheticEvent) => {
    const { type, name, value, checked } = event.target as HTMLInputElement;
    let updatedValue: any = type === "checkbox" ? checked : value;
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
    setErrors(() => validate(updatedProject));
  };
  const validate = (project: Project) => {
    let errors = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    if (project.description.length === 0) {
      errors.description = "Description is required";
    }
    if (project.budget <= 0) {
      errors.budget = "Budget must be greater than 0";
    }
    return errors;
  };
  const isValid = () => {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
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
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="description">Project Description</label>

      <textarea
        name="description"
        placeholder="enter description"
        onChange={handleChange}
        value={project?.description}
      ></textarea>
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor="budget">Project Budget</label>

      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        onChange={handleChange}
        value={project?.budget}
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}
      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        checked={project?.isActive}
        onChange={handleChange}
      />

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
