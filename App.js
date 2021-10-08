import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

function App() {
  // const [img, setImg] = useState(require('./src/happy.png'));

  const [textoFrase, setTextoFrase] = useState('');
  const happyEmoji = require('./src/happy.png');
  const sadEmoji = require('./src/sad.png');
  const copy = require('./src/copy.png');
  const [sadColor, setSadColor] = useState('white');
  const [happyColor, setHappyColor] = useState('white');
  const [clipboard, setClipboard] = useState('#ccc');

  const frasesPositivas = [
    'Siga os bons e aprenda com eles1.',
    'Siga os bons e aprenda com eles2.',
    'Siga os bons e aprenda com eles3.',
    'Siga os bons e aprenda com eles4.',
  ];

  const frasesNegativas = ['Parabéns, você não foi aprovado.'];

  const feedbackPositivo = () => {
    setHappyColor('yellow');
    setSadColor('white');
    let numeroAleatorio = Math.floor(Math.random() * frasesPositivas.length);
    setTextoFrase(`"${frasesPositivas[numeroAleatorio]}"`);
    setClipboard('#ccc');
  };

  const feedbackNegativo = () => {
    setHappyColor('white');
    setSadColor('red');
    let numeroAleatorio = Math.floor(Math.random() * frasesNegativas.length);
    setTextoFrase(`"${frasesNegativas[numeroAleatorio]}"`);
    setClipboard('#ccc');
  };

  const copyToClipboard = () => {
    setClipboard('#48964C');
    Clipboard.setString(textoFrase);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.btnTexto, {fontSize: 24}]}>FeedBacker</Text>
      </View>
      <View style={styles.emojiArea}>
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={feedbackPositivo}>
            <Image
              source={happyEmoji}
              style={[
                styles.img,
                {backgroundColor: happyColor, borderRadius: 100},
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={feedbackNegativo}>
            <Image
              source={sadEmoji}
              style={[
                styles.img,
                {backgroundColor: sadColor, borderRadius: 100},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={[styles.frase, {color: 'black'}]}>{textoFrase}</Text>
      </View>
      <TouchableOpacity
        style={[styles.botao, {backgroundColor: clipboard}]}
        onPress={copyToClipboard}>
        <View style={styles.btnArea}>
          <Image style={styles.imgCopy} source={copy} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  imgCopy: {
    width: 35,
    height: 35,
  },
  frase: {
    fontSize: 20,
    color: 'blue',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 50,
    height: 50,
    borderColor: '#121212',
    margin: 10,
    borderWidth: 2,
    borderRadius: 50,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: '500',
    color: 'blue',
  },
  emojiArea: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default App;
