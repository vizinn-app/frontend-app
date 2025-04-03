import { Screen, Text } from "@/components"
import { observer } from "mobx-react-lite"
import { Image, TextInput, View } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { HomeMenu } from "@/components/Menu/HomeMenu"
import { HomeSwiper } from "@/components/Swiper/HomeSwiper"

const adam = require("../../assets/images/adam.jpeg")
const settingsIcon = require("../../assets/icons/settings.png")

export const HomeScreen = observer(function HomeScreen(_props) {
  const {
    control,
    formState: { errors },
  } = useForm()

  return (
    <Screen>
      <View className="flex flex-row justify-between gap-y-[20px]">
        <View className="gap-3">
          <Text className="text-4xl  text-[#2F2F2F] font-semibold">ei, adam! 👋</Text>
          <Text
            className="text-[18px] text-[#888888] font-medium tracking-wider
"
          >
            explore suas redondezas
          </Text>
        </View>

        <Image source={adam} className="w-[65px] h-[65px] rounded-full" />
      </View>

      <View
        className={`${errors.locais ? "border-2 border-red-600/50" : "border-2 border-[#D2D2D2]"} rounded-3xl mt-10 flex-row items-center`}
      >
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className={`px-8 p-4 text-[#888888]  placeholder:text-[#888888] placeholder:text-[18px] h-[58px] w-[75%]`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="procurar locais"
            />
          )}
          name="locais"
          rules={{ required: "Este campo é obrigatório" }}
        />
        <View className="max-h-[32px] border-[#D2D2D2] h-full border-l-2" />
        <View className="text-[#888888] ps-10">
          <Image source={settingsIcon} className="h-[21px] w-[24px]" />
        </View>
      </View>

      <View className="justify-between items-center flex-row my-10">
        <Text className="text-[#2F2F2F] font-semibold text-2xl">anúncios populares</Text>
        <Text className="text-[#888888] font-semibold">ver todos</Text>
      </View>

      <HomeMenu />

      <HomeSwiper />
    </Screen>
  )
})
