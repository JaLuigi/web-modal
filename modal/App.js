import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.showModalButton} onPress={() => setModal(true)}>
        <Text style = {styles.buttonText}>Show modal message</Text>
      </Pressable>
      <StatusBar style="auto" />

      <Modal         
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
      >
        <View tyle={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style = {styles.modalText}>This is a modal...</Text>
            <Pressable style={styles.closeButton} onPress={() => setModal(false)}>
              <Text style = {styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showModalButton: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 296,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
  },
});
