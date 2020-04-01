import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'

const ProfileVerification = () => {
    return (
 <Block  background >
        <Block flex={1} marginVertical={30} paddingHorizontal={SIZES.padding}>
            <Block flex={0}>
                <Input defaultValue="BVN"/>
            </Block>


        </Block>
            <Block paddingHorizontal={30} paddingBottom={10} flex={0}>
            <Button >
            <Text white center h6>Verify</Text>
          </Button>
            </Block>
            
    </Block>
    )
}

export default ProfileVerification
