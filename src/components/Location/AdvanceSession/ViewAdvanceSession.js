import React, { useState, useContext } from "react";
import { Container, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import { LogContext } from "../../../context/context";

const ViewAdvanceSession = ({}) => {
  const { sortedAdvanceSessions } = useContext(LogContext);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>View Advance Sessions</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row className="my-3 px-4">
          {sortedAdvanceSessions.map((session, index) => (
            <Col column sm="4 p-2">
              <Card
                className="mt-5 mb-3"
                key={index}
                style={{ border: "solid black" }}
              >
                <Card.Body>
                  <h5>Advance Session {index + 1} </h5>
                  <Col column sm="12">
                    <label className="form-check-label">
                      {session.lecturers + ""}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label">{session.tag}</label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label">{session.group}</label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label">
                      {session.subject}({session.code})
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label">
                      {session.stdCount} ({session.duration})
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label">{session.room}</label>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ViewAdvanceSession;
