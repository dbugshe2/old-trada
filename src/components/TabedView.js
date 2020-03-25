import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Button from "./primary/Button";
import Block from "./primary/Block";
import Text from "./primary/Text";
import ImageIcon from "./primary/ImageIcon";
import StepIndicator from "./StepIndicator";

import { COLORS, SIZES } from "../utils/theme";

const TabedView = props => {
  /*
  *
  *
  * - Usage
  * <TabedView views={views} initialView={0} />
  *
  * - Example
  * import {TabedView} from '../components'
  * import TabedView from './TabedView';
  * import Button from './primary/Button';
   *import StepIndicator from './StepIndicator';
 const App = () => {
   * const views = [
   *   {
   *     id: 0,
   *     label: "first view",
   *     activeIcon: '',
   *     inactiveIcon: '',
   *     viewContent: <Block> <Text>Some Content</Text></Block>
   *   },
   *   {
   *     id: 1,
   *     label: "second view",
   *      activeIcon: '',
   *     inactiveIcon: '',
   *     viewContent: <Block> <Text>Some Content</Text></Block>
   *   },
   *   {
   *     id: 2,
   *     label: "third view",
   *      activeIcon: [],
   *     inactiveIcon: [],
   *     viewContent: <Block> <Text>Some Content</Text></Block>
   *   }
   * ]
   *
   *
   * return (
   * <TabedView views={views} initialView={0} scroll={false} />
   * )
   *
   * }
   *
   * - Props
   *   * views: an array of objects representing all the view in the tabbed view
   *   * initailView: a value for the initial View, defaults to 0
   *   * scroll: this sets the viewpager props scrollEnabled to enable swiping to switch views
   *
   */

  const { views, initialView, scroll, steps, onComplete } = props;

  const initialViewProp = (initialView && initialView) || 0; // use initialView of 0

  const [activeView, setActiveView] = useState(initialViewProp); // state of activetab initialized to initialView

  const labels = new Array(steps).fill("");

  let TabedViewRef = null;
  let TabsListRef = null;

  const handleViewSelected = viewId => {
    if (viewId > steps - 1 ) {
      onComplete && onComplete();
      return
    }
    setActiveView(viewId);
    TabedViewRef.setPage(viewId);
  };

  const handleScroll = position => {
    setActiveView(position);
  };
  return (
    <Block>
      <Block flex={0}>
        <StepIndicator
          ref={ref => (TabsListRef = ref)}
          currentPosition={activeView}
          customStyles={tabsCustomStyle}
          stepCount={steps}
          labels={labels}
          direction="horizontal"
        />
      </Block>

      <Block>
        <ViewPager
          orientation="horizontal"
          style={{ flex: 1 }}
          initialPage={initialViewProp}
          pageMargin={10}
          scrollEnabled={(scroll && scroll) || false}
          showPageIndicator={false}
          ref={ref => {
            TabedViewRef = ref;
          }}
          onPageSelected={e => {
            const position = e.nativeEvent.position;
            handleScroll(position);
          }}
        >
          {views.map((view, index) => (
            <Block key={index} flex={1}>
              {view.viewContent()}
            </Block>
          ))}
        </ViewPager>
      </Block>
      <Block flex={0} space="between" row>
        <Block>
          {activeView !== 0 && (
            <Button
              transparent
              onPress={() => handleViewSelected(activeView - 1)}
            >
              <Text mtregular gray h5>
                Back
              </Text>
            </Button>
          )}
        </Block>
        <Block right bottom>
          <Button
            radius={0}
            transparent
            onPress={() => handleViewSelected(activeView + 1)}
          >
            <Text right mtregular primary h5>
              Next
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default TabedView;

const tabsCustomStyle = {
  stepIndicatorSize: 15,
  currentStepIndicatorSize: 18,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: COLORS.primary,
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: COLORS.primary,
  stepStrokeUnFinishedColor: COLORS.inactive,
  separatorFinishedColor: COLORS.primary,
  separatorUnFinishedColor: COLORS.inactive,
  stepIndicatorFinishedColor: COLORS.white,
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: COLORS.white,
  stepIndicatorLabelFinishedColor: COLORS.white,
  stepIndicatorLabelUnFinishedColor: COLORS.white,
  labelColor: COLORS.white,
  labelSize: 13,
  currentStepLabelColor: COLORS.primary
};
