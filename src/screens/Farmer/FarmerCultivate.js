import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'

const FarmerCultivate = ({navigation}) => {
    return (
 <Block  background >
 <Header backTitle />

        <Block flex={1} marginVertical={10} paddingHorizontal={SIZES.padding}>
        <Text mtmedium gray h5 marginVertical={5} >What crops do farmer cultivate?</Text>
            <Block flex={0}>
                <Input label="Crop type"/>
                <Dropdown defaultValue="Estimate farm size (hectare)"/>
                <Input label="Bags after harvest (100kg)"/>
            </Block>


        </Block>
            <Block marginLeft={280} flex={0}>
            <Button secondary onPress={() => navigation.navigate("FarmerPhotoUpload")}>
            <Text white center h6>Next</Text>
          </Button>
            </Block>
            
    </Block>
    )
}

export default FarmerCultivate
