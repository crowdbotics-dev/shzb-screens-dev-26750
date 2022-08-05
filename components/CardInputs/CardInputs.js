<View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Card Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setCardNumber(text)}
              value={cardNumber}
              placeholder="Enter your Card Number"
              placeholderTextColor="#9B9B9B"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.halfInputs}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Expiration Date</Text>
              <TextInput
                style={[styles.input, styles.input1]}
                onChangeText={text => setCardExpiry(text)}
                value={cardExpiry}
                placeholder="Enter your last name"
                placeholderTextColor="#9B9B9B"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>CVV</Text>
              <TextInput
                style={[styles.input, styles.input2]}
                onChangeText={text => setCvv(text)}
                value={cvv}
                placeholder="CVV"
                placeholderTextColor="#9B9B9B"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Card Holder Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setName(text)}
              value={name}
              placeholder="Username"
              placeholderTextColor="#9B9B9B"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

inputs: {
    paddingHorizontal: 20,
    justifyContent: "center",
    height: 300
  },
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center"
  },
  inputText: {
    fontSize: 14,
    marginLeft: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%",
    height: 50
  },
  halfInputs: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  input1: {
    height: 50,
    borderRightWidth: 0,
    borderRightColor: "#fff",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  input2: {
    height: 50,
    borderLeftWidth: 0,
    borderLeftColor: "#fff",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },