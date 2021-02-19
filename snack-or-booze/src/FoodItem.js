import React, { useContext } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "./FoodItem.css";
import ThemeContext from "./ThemeContext";

function FoodItem({ items, cantFind, type }) {
  const { id } = useParams();
  const { isChecked } = useContext(ThemeContext);

  let item = items.find((item) => item.id === id);
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card className={isChecked ? "light" : "dark"}>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
        <Button className="FoodItem-btn" outline float-left>
          <Link to={`/${type}`}>Back</Link>
        </Button>
      </Card>
    </section>
  );
}

export default FoodItem;
