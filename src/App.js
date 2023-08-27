import axios from "axios";
import React, { useState } from "react";
import {

    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Alert
} from "react";

const Login = ({ navigation }: any) => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        if (id.trim() === "") {
            Alert.alert("���̵� �Է� Ȯ��", "���̵� �Էµ��� �ʾҽ��ϴ�.");
        } else if (password.trim() === "") {
            Alert.alert("��й�ȣ �Է� Ȯ��", "��й�ȣ�� �Էµ��� �ʾҽ��ϴ�.");
        } else {
            axios.post("http://192.168.35.149:8080/login",
                null,
                { params: { id: id, pwd: password } }
            ).then(function (resp) {
                console.log(resp.data);
                if (resp.data !== null && resp.data != "") {
                    console.log("�α��� ����");
                } else {
                    Alert.alert("�α��� ����", "���̵� ��й�ȣ�� Ȯ���ϼ���.");
                    setId("");
                    setPassword("");
                }
            }).catch(function (err) {
                console.log(`Error Message: ${err}`);
            })
        }
    }

    return (
        <View style={styles.container}>
           
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="���̵�"
                    placeholderTextColor="#003f5c"
                    onChangeText={(id) => setId(id)}
                    value={id}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    textContentType="password"
                    placeholder="��й�ȣ"
                    placeholderTextColor="#003f5c"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                />
            </View>

            {/* TouchableOpacity == Anchor */}
            <TouchableOpacity
                onPress={() => navigation.navigate("account")}
            >
                <Text style={styles.forgotButton}>ȸ������</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => login()}
            >
                <Text style={styles.whiteColor}>�α���</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9e9e9",
        alignItems: "center",
        justifyContent: "center",
    },
   
    inputView: {
        backgroundColor: "#ffc0cb",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20
    },
    forgotButton: {
        height: 30,
        marginBottom: 30
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ff1493",
    },
    whiteColor: {
        color: "#ffffff"
    }
});

export default Login;