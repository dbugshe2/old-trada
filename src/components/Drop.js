import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';







const Drop = props => {

  let data = [{
    value: 'Lagos',
  }, {
    value: 'Abuja',
  }, {
    value: 'Kogi',
  }];

    return (
      <Dropdown
      {...props}
      data={data}
      />
    );
  }
export default Drop;