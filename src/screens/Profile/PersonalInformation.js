import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'
import { Image } from "react-native";


const PersonalInformation = () => {
    return (
    <Block scroll background >
    <Block marginVertical={30} center>
          <Image
            source={{
              uri: "https://api.adorable.io/avatars/100/tradaAvatar.png"
            }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
        </Block>
        <Block  paddingHorizontal={SIZES.padding}>
            <Block>
                <Input label="First Name"/>
                <Input label="Last Name"/>
                <Input label="Email"/>
                <Input label="Phone"/>
                <Input label="Address"/>
                <Dropdown defaultValue  ="Gender"/>

                <Block  row  >
                <Dropdown marginRight={15} flex={6} defaultValue="Day"/>
                <Dropdown marginHorizontal={8} flex={9} defaultValue="Month"/>
                <Dropdown marginLeft={10} flex={8} defaultValue="Year"/>
                </Block>
                <Input label="Date oF Birth"/>
            </Block>

            <Block marginVertical={40}>
            <Button >
            <Text white center h6>Save</Text>
          </Button>
            </Block>

        </Block>
            
    </Block>
    )
}

export default PersonalInformation
