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
import { COLO}


const JobDetails = () => {
  return (
    <Text>JobDetails</Text>
  )
}

export default JobDetails