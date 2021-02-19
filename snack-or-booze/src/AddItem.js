import React, { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./AddItem.css";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const AddItem = ({ addItem }) => {
  const initialState = { name: "", serve: "", description: "", recipe: "" };
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const { type } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData, type);
    setFormData(initialState);
    type === "snacks" ? history.push("/snacks") : history.push("/drinks");
  };

  let title;
  type === "snacks" ? (title = "Snack") : (title = "Drink");

  return (
    <Form
      onSubmit={handleSubmit}
      className="AddItem-card"
      style={{ padding: "2rem" }}
    >
      <h1>Add New {title}</h1>
      <br></br>
      <FormGroup row>
        <Label htmlFor="name" sm={4}>
          Name
        </Label>
        <Col sm={8}>
          <Input
            placeholder={`Name of ${title}`}
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row></FormGroup>
      <FormGroup row>
        <Label htmlFor="description" sm={4}>
          Description
        </Label>
        <Col sm={8}>
          <Input
            placeholder={`${title} Description`}
            type="textarea"
            name="description"
            id="description"
            required
            value={formData.description}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label htmlFor="recipe" sm={4}>
          Recipe
        </Label>
        <Col sm={8}>
          <Input
            placeholder={`${title} Recipe`}
            type="textarea"
            name="recipe"
            id="recipe"
            required
            value={formData.recipe}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label htmlFor="serve" sm={4}>
          Serve
        </Label>
        <Col sm={8}>
          <Input
            placeholder={"Serving Suggestion"}
            type="textarea"
            name="serve"
            id="serve"
            required
            value={formData.serve}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <div className="AddItem-btns-wrapper">
        <button className="btn btn-secondary float-left">Submit {title}</button>
        <Link to={`/${type}`}>Back</Link>
      </div>
    </Form>
  );
};

export default AddItem;
