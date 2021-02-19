import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>
            Choose form {snacks.length} food and {drinks.length} drinks options.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
