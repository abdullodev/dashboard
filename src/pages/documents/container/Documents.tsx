import { Col, Row } from "antd";
import { DocumentStyle } from "./Document.sgtyle";
import Statistics from "../components/Statistics";

const Documents = () => {
  return (
    <DocumentStyle>
      <Row>
        <Col xs={24} sm={16}>
          <Statistics />
        </Col>
        <Col xs={24} sm={8}>
          Document2
        </Col>
      </Row>
    </DocumentStyle>
  );
};

export default Documents;
