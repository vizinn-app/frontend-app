import { Text, TextInput, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Image, View } from "react-native"
import { useForm, Controller } from "react-hook-form"

const logoDark = require("../../assets/images/logos/logo-dark.png")
const pin = require("../../assets/images/pin.png")
const icon = require("../../assets/images/new-icons/brillant-icon.png")

export const HomeScreen = observer(function HomeScreen(_props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <View className=" bg-white min-h-screen flex flex-col relative">
      <View className="py-20 px-10 relative">
        <Text className="text-dark text-6xl my-20 max-w-[300px] relative z-10 block">
          tem uma xícara de açúcar aí?
        </Text>
        <Image source={logoDark} className="w-[130px] h-[35px] cover mt-4 ms-4" />
        <Image source={pin} className="h-[450px] w-[453px] cover absolute ms-[125px] -mt-5 z-0" />
      </View>
      <View className="w-[90%] h-[420px] bg-dark mt-auto mx-auto rounded-t-[70px] relative">
        <View className="absolute left-1/2 -translate-x-1/2 rotate-6 py-3 px-7 bg-primary rounded-full -mt-10">
          <Text className=" text-5xl text-white font-black">novo por aqui?</Text>
          <Image source={icon} className="w-[44px] h-[44px] absolute right-0 bottom-[47px] -me-2" />
        </View>
        <View className="flex flex-col pt-[60px] px-4 text-white gap-y-2">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="rounded-full border border-white/10 p-4 text-white/50  placeholder:text-white/50"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="vizinn, como posso te chamar?"
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
                placeholder="agora, teu melhor email"
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
                placeholder="a senha, não esquece hein?"
              />
            )}
            name="name"
            rules={{ required: "Este campo é obrigatório" }}
          />
          {errors.name && <Text>ao menos deixa um sobrenome aí!</Text>}

          <Text className="text-white max-w-[275px] block mx-auto mt-2">
            você concorda com os <Text className="font-bold">Termos de Uso do Aplicativo</Text> ao
            confirmar seu cadastro
          </Text>
          <TouchableOpacity
            className="bg-primary rounded-full my-4 p-4 block mx-auto"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white">me tornar um vizinn</Text>
          </TouchableOpacity>
          <TouchableOpacity className="" onPress={() => console.log("login")}>
            <Text className="text-white block mx-auto">
              já tem uma conta? <Text className="font-bold">faça login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
})
