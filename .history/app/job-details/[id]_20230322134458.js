import { 
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    RefreshControl 
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import { 
    Company, 
    JobAbout, 
    JobFooter, 
    JobTabs, 
    ScreenHeaderBtn, 
    Specifics 
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {}

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension="60%" 
                        handlePress={() => router.back()}
                    />
                ),

                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension="60%" 
                    />
                ),
                headerTitle: ''
            }}
        />

        <>
        <ScrollView showsVerticalScrollIndicator={false} RefreshControl=
        {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary}/>
            ) : error ?}
        </ScrollView>
        </>

    </SafeAreaView>
  )
}

export default JobDetails