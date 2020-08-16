import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Oguzhan');
  const [address, setAddress] = useState('Roma');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Jonathan')}>Set Name to Jonathan</button>
      <button onClick={() => setAddress('England')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Oguzhan',
      address: 'Istanbul'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Jonathan' })}>
          Set Name to Jonathan
        </button>
        <button onClick={this.setState({ address: 'Roma' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;