import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionCreators} from "../../ducks/services";
import Preload from "../Preload/Preload";

class Services extends React.Component {
  componentWillMount() {
    this.props.servicesActions.getList();
  }

  render() {
    if (this.props.servicesState.fetching) {
      return <Preload />;
    }
    return (
      <div>
        <h2>Сервисы</h2>
        {this.props.servicesState.error && <div>{this.props.servicesState.error}</div>}
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {this.props.servicesState.services &&
              this.props.servicesState.services.map(el => (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    servicesState: state.services
  };
}

function mapDispatchToProps(dispatch) {
  return {
    servicesActions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);
