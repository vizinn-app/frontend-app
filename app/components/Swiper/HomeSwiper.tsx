/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native"
import { Text } from "@/components/Text"
import { MapPin, Star } from "lucide-react-native"
import { Image, View, FlatList, TouchableOpacity } from "react-native"

const slides = [
  {
    id: "1",
    image: require("../../../assets/images/sample/sample-1.png"),
    title: "anúncio exemplo",
    location: "condo, mínio",
    rating: "4.8",
    route: "Page1", // Nome da página para navegar futuramente
  },
  {
    id: "2",
    image: require("../../../assets/images/sample/sample-2.png"),
    title: "anúncio exemplo",
    location: "ufrn, natal",
    rating: "4.8",
    route: "Page2",
  },
  {
    id: "3",
    image: require("../../../assets/images/sample/sample-2.png"),
    title: "anúncio exemplo",
    location: "ufrn, natal",
    rating: "4.8",
    route: "Page3",
  },
]

interface Props extends React.ComponentProps<typeof View> {
  className?: string
}

export function HomeSwiper({ className = "", ...props }: Props) {
  const navigation = useNavigation()

  return (
    <View className={`${className} my-10 w-full`} {...props}>
      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: "75%" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-[95%] h-[424px] relative"
            onPress={() => navigation.navigate(item.route as never)}
          >
            <Image source={item.image} className="w-full h-full rounded-3xl shadow" />
            <View className="absolute bottom-0 left-1/2 p-6 mb-4 bg-[#12304E]/90 rounded-3xl -translate-x-1/2 gap-4">
              <Text className="text-white">
                {item.title}, <Text className="text-[#CAC8C8]">localização</Text>
              </Text>
              <View className="flex-row justify-between">
                <View className="flex-row gap-3 items-center">
                  <MapPin color="#CAC8C8" size={16} />
                  <Text className="text-[#CAC8C8] font-medium">{item.location}</Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Star color="#CAC8C8" size={16} />
                  <Text className="font-medium text-[#CAC8C8]">{item.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
