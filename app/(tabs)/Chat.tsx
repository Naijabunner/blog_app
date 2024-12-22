import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";
import axios from "axios";
import { chatWithAssistant, Message } from "@/services/services";
import { API_KEY } from "@env"
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

const Chatbot = () => { 
    const router = useRouter()
    const [messages, setMessages] = useState([
        { sender: "user", text: "Hello, how are you?" },
        { sender: "bot", text: "I'm good, thank you! How can I assist you today?" },
        { sender: "user", text: "Can you tell me a joke?" },
        { sender: "bot", text: "Why don't scientists trust atoms? Because they make up everything!" },
    ]);
    const [userInput, setUserInput] = useState("");
    const [currentUser, setCurrentUser] = useState<'user' | 'bot'>('user')
   
    const handleSendMessage = () => {
        if (!userInput) return;
        const mssg = {
            sender: currentUser,
            text: userInput
        }
        setMessages((prev) => [...prev, mssg])
    }

    const handleSwitch = () => {
        if (currentUser === 'user') {
            setCurrentUser('bot')
        } else {
            setCurrentUser('user')
        }
    }
   
   
    const handleNavigation = () => {
        router.back()
    }
   
    return (
        <View style={{ flex: 1, padding: 10, paddingTop: 50, }} >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: "flex-start", gap: 10, alignItems: 'center', marginBottom: 20, borderBottomWidth:1 }}>
                    <TouchableOpacity onPress={handleNavigation}>
                        <Ionicons name="arrow-back" size={24} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        Chats
                    </Text>
                </View>
                <ScrollView keyboardShouldPersistTaps="handled">
                    {messages.map((message, index) => (
                        <View style={{}} key={index}>

                            <View

                                style={{
                                    padding: 10,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                    borderEndEndRadius: message.sender === "user" ? 0 : 10,
                                    borderBottomLeftRadius: message.sender !== "user" ? 0 : 10,
                                    alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
                                    backgroundColor: message.sender === "user" ? "#DCF8C6" : "#ECECEC",
                                }}
                            >
                                <Text style={{ fontSize: 16 }}>{message.text}</Text>
                            </View>
                        </View>

                    ))}
                </ScrollView>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", padding: 3 }}>
                    <View style={{
                        flex: 1, flexDirection: "row", alignItems: "center", padding: 10,
                        backgroundColor: '#ceddc2',
                        gap: 10,
                        borderRadius: 20,
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginRight: 10,
                        position: "relative"
                    }}>
                        <Text className=" " style={{ position: "absolute", top: -30, width: '100%', textAlign: "center" }}>
                            You are typing as {currentUser}
                        </Text>
                        <TouchableOpacity onPress={handleSwitch}>
                            <Ionicons name="swap-horizontal-outline" size={20} />
                        </TouchableOpacity>
                        <TextInput
                            style={{
                                flex: 1,
                            }}
                            value={userInput}
                            onChangeText={setUserInput}
                            placeholder="Type your message"
                        />
                    </View>
                    <TouchableOpacity onPress={handleSendMessage}>
                        <Ionicons name="send" color={'#8ac65d'} size={24} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>
    );

}

const styles = StyleSheet.create({

});

export default Chatbot;
