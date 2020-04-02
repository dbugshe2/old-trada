import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'

const ChangePassword = () => {
    return (
 <Block  background >
 <Header backTitle="Change Password" />
        <Block flex={1} marginVertical={30} paddingHorizontal={SIZES.padding}>
            <Block flex={0}>
                <Input label="Please enter old password"/>
                <Input label="New password"/>
                <Input label="Confirm new password"/>
            </Block>


        </Block>
            <Block paddingHorizontal={30} paddingBottom={10} flex={0}>
            <Button >
            <Text white center h6>Confirm</Text>
          </Button>
            </Block>
            
    </Block>
    )
}

export default ChangePassword