import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components"; 

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => {
                        <ScreenHeaderBtn icon />
                    }
                }}
            />
        </SafeAreaView>
    )
}

export default Home