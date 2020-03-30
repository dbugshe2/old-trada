import React, { useState, useContext, useEffect, useRef } from "react";
import { Block, Text, Header, Input, Button } from "../../components";
import { SIZES } from "../../utils/theme";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/auth/AuthContext';

const EnterPhysical = () => {
  const auth = useContext(AuthContext)
  const {setUserDetails} = auth
  const { register, setValue, handleSubmit, errors } = useForm({mode: 'onBlur'});
  const [message, setMessage] = useState("");
  
  const onSubmit = data => {
    try {
      setUserDetails(data)
    } catch (error) {
      setMessage(error)      
    }
  }

  useEffect(() => {
    register({ name: "firstName" }, {required: true});
    register({ name: "lastName" }, {required: true});
    register({ name: "phone" }, {required: true});
    register({ name: "email" }, {required: true});
  }, [register]);

  return (
    <Block background>
      <Block space="around">
        <Block scroll>
          <Input
            onChangeText={text => setValue("firstName", text)}
            label="First Name"
            returnKeyType="next"
            // blurOnSubmit={false}
          />
          <Input
            onChangeText={text => setValue("lastName", text)}
            label="Last Name"
            returnKeyType="next"
            // blurOnSubmit={false}
          />
          <Input
            onChangeText={text => setValue("phone", text)}
            keyboardType="number-pad"
            label="Phone Number"
            returnKeyType="next"
            // blurOnSubmit={false}
          />
          <Input
            onChangeText={text => setValue("email", text)}
            keyboardType="email-address"
            label="Email"
            returnKeyType="done"
            autoCapitalize="none"
            // blurOnSubmit={false}
            onBlur={handleSubmit(onSubmit)}
          />
          {errors.firstName && <Text center secondary>{errors.firstName.message}</Text>}
          {errors.lastName && <Text center secondary>{errors.lastName.message}</Text>}
          {errors.phone && <Text center secondary>{errors.phone.message}</Text>}
          {errors.email && <Text center secondary>{errors.email.message}</Text>}
        <Text>{message}</Text>
        </Block>
      </Block>
    </Block>
  );
};

export default EnterPhysical;
