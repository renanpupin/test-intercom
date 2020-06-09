/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
    TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Modal, { ModalContent, ModalFooter, ModalButton, ModalTitle } from 'react-native-modals';


import Intercom from 'react-native-intercom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }
  }

  componentDidMount() {
    Intercom.registerUnidentifiedUser();
  }

  render() {
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
              <View style={styles.body}>
                <TouchableOpacity style={{padding: 100}} onPress={() => {
                  Alert.alert(
                      "Alert Title",
                      "My Alert Msg",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => {
                            Intercom.displayMessageComposer();
                          } }
                      ],
                      { cancelable: false }
                  );

                }}><Text>Click</Text></TouchableOpacity>
              </View>

              {/*<Button*/}
              {/*    title="Show Modal"*/}
              {/*    onPress={() => {*/}
              {/*      this.setState({ visible: true });*/}
              {/*    }}*/}
              {/*/>*/}

              {/*<Modal*/}
              {/*    width={0.9}*/}
              {/*    visible={this.state.visible}*/}
              {/*    rounded*/}
              {/*    actionsBordered*/}
              {/*    onTouchOutside={() => {*/}
              {/*      this.setState({ defaultAnimationModal: false });*/}
              {/*    }}*/}
              {/*    modalTitle={*/}
              {/*      <ModalTitle*/}
              {/*          title="Popup Modal - Default Animation"*/}
              {/*          align="left"*/}
              {/*      />*/}
              {/*    }*/}
              {/*    footer={*/}
              {/*      <ModalFooter>*/}
              {/*        <ModalButton*/}
              {/*            text="CANCEL"*/}
              {/*            bordered*/}
              {/*            onPress={() => {*/}
              {/*              this.setState({ defaultAnimationModal: false });*/}
              {/*            }}*/}
              {/*            key="button-1"*/}
              {/*        />*/}
              {/*        <ModalButton*/}
              {/*            text="OK"*/}
              {/*            bordered*/}
              {/*            onPress={() => {*/}
              {/*              this.setState({ defaultAnimationModal: false });*/}
              {/*            }}*/}
              {/*            key="button-2"*/}
              {/*        />*/}
              {/*        <ModalButton*/}
              {/*            text="OK"*/}
              {/*            bordered*/}
              {/*            onPress={() => {*/}
              {/*              this.setState({ defaultAnimationModal: false });*/}
              {/*            }}*/}
              {/*            key="button-2"*/}
              {/*        />*/}
              {/*      </ModalFooter>*/}
              {/*    }*/}
              {/*>*/}
              {/*  <ModalContent*/}
              {/*      style={{ backgroundColor: '#fff' }}*/}
              {/*  >*/}
              {/*    <Text>Default Animation</Text>*/}
              {/*    <Text>No onTouchOutside handler. will not dismiss when touch overlay.</Text>*/}
              {/*  </ModalContent>*/}
              {/*</Modal>*/}
            </ScrollView>
          </SafeAreaView>
        </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    padding: 50,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
