import React, {PureComponent} from 'react';
import DynamicTable from './Components/DynamicTable';
import Button from 'reactstrap/lib/Button';
import Axios from 'axios';
import map from 'lodash/map';
import head from 'lodash/head';
import keys from 'lodash/keys';

const API = 'http://localhost:5000/api/';

const labels = ['countries','cars','animals','instruments'];

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      entities: [],
      entityProps: [],
      labels,
      selectedLabel: null
    }
  }

  async endPoint(label){
    const {data} = await Axios.get(`${API}${label}`);
    this.setState(() => ({
      entities: data,
      entityProps: keys(head(data)),
      selectedLabel: label
    }));
  }

  render() {
    const {entities, entityProps, labels, selectedLabel} = this.state;
    return (
     <div>
       {map(labels, label => (
        <Button color="info" onClick={() => this.endPoint(label)}> BOTONEAME {label}</Button>
       ))}
       <hr/>
       <DynamicTable {...{entities, entityProps, selectedLabel}}/>
      </div>
    )
  }
}

export default App;
