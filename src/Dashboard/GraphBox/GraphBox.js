/**
 * Component: GraphBox
 * Purpose: Displays graphs on home page
 * Properties:
 *  agentId: Agent number in database
 *  data: Data object from Parent
 **/

//React and React Bootstrap imports
import React, { Component } from "react";
import { Col, Panel } from "react-bootstrap";

//Import sub components
import DetailsBox from "../DetailsBox/DetailsBox";
import CpuStackChart from "./StackedAreaChart/CpuStackChart";
import LoadStackChart from "./StackedAreaChart/LoadStackChart";
import MemoryStackChart from "./StackedAreaChart/MemoryStackChart";
import NetworkLineChart from "./StackedAreaChart/NetworkLineChart";

class GraphBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="GraphBox">
        <Col xs={12} md={12}>
          <Col xs={12} md={12}>
            <DetailsBox
              device={this.props.data.device}
              system={this.props.data.system}
              version={this.props.data.release}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h4>Load Average</h4>
            <LoadStackChart agentId={this.props.data.agent} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h4>CPU Utilization</h4>
            <CpuStackChart agentId={this.props.data.agent} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h4>Memory Utilization</h4>
            <MemoryStackChart agentId={this.props.data.agent} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h4>Network Average</h4>
            <NetworkLineChart agentId={this.props.data.agent} />
          </Col>
        </Col>
      </div>
    );
  }
}

//Default properties
GraphBox.defaultProps = {
  agentId: "2",
  data: {}
};

//Exports class to Global namespace
export default GraphBox;
