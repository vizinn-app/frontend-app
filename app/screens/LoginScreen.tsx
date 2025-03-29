import { Text, TextInput, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Image, View } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { useNavigation } from "@react-navigation/native"

const logoLight = require("../../assets/images/logos/logo-light.png")
const pin = require("../../assets/images/login-pin.png")
const icon = require("../../assets/images/new-icons/brillant-green.png")
const gradientBg = require("../../assets/images/bg-gradient.png")
const googleIcon = require("../../assets/images/new-icons/google.png")

export const LoginScreen = observer(function LoginScreen(_props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigation = useNavigation()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <View className=" bg-linear-to-t from-[#253369] to-[#1E2336] min-h-screen flex flex-col relative">
      <Image source={gradientBg} className="h-screen w-screen contain absolute z-0" />

      <Image
        source={logoLight}
        className="w-[133px] h-[35px] cover z-10 absolute -translate-x-1/2 left-1/2 top-40 mt-8"
      />
      <Image
        source={pin}
        className="h-[661px] w-[550px] cover absolute  -translate-x-1/2 left-1/2 right-1/2"
      />
      <View className="w-[90%] h-[420px] bg-dark mt-auto mx-auto rounded-t-[70px] relative">
        <View className="absolute left-1/2 -translate-x-1/2 rotate-6 py-3 px-7 bg-primary rounded-full -mt-10">
          <Text className=" text-4xl text-white font-black">já é nosso vizinn?</Text>
          <Image
            source={icon}
            className="w-[44px] h-[44px] absolute left-[35px] top-[42px] -me-2"
          />
        </View>
        <View className="flex flex-col pt-[60px] px-4 text-white gap-y-2 h-full">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="rounded-full border border-white/10 p-4 text-white/50  placeholder:text-white/50"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="email"
              />
            )}
            name="name"
            rules={{ required: "Este campo é obrigatório" }}
          />
          {errors.name && <Text>ao menos deixa um sobrenome aí!</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="rounded-full border border-white/10 p-4 text-white/50  placeholder:text-white/50"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="senha"
              />
            )}
            name="name"
            rules={{ required: "Este campo é obrigatório" }}
          />
          {errors.name && <Text>ao menos deixa um sobrenome aí!</Text>}

          <TouchableOpacity
            className="bg-primary rounded-full my-4 p-4 block mx-auto"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white">ver os vizinns</Text>
          </TouchableOpacity>

          <Text className="text-white max-w-[275px] block mx-auto mt-auto">
            ou faça login com <Text className="font-bold">google</Text>
          </Text>
          <View className="bg-white p-1 flex items-center justify-center rounded-full mx-auto">
            <Image source={googleIcon} className="w-[35px] h-[36px] cover" />
          </View>
          <View className="flex gap-2 mb-10">
            <TouchableOpacity
              className=""
              onPress={() => navigation.navigate("ForgotPassword" as never)}
            >
              <Text className="text-white block mx-auto">
                não lembra da senha? <Text className="font-bold">esqueci a senha</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="" onPress={() => navigation.navigate("Register" as never)}>
              <Text className="text-white block mx-auto">
                novo por aqui? <Text className="font-bold">cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
})
