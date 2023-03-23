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
import {}

const JobDetails = () => {
  return (
    <Text>JobDetails</Text>
  )
}

export default JobDetails