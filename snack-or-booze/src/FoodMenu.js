import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import ThemeContext from "./ThemeContext";

function FoodMenu({ items, type, title }) {
  const { isChecked } = useContext(ThemeContext);
  return (
    <section className="col-md-8 col-lg-5">
      <Card className={isChecked ? "light" : "dark"}>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Pick the item you desire from the list below. Tasty {type}, yum!
          </CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Button className="FoodMenu-btn" outline color="secondary">
            <Link to={`/${type}/new`}>Add New Item</Link>
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
