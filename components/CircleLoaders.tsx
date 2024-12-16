import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

const CircleLoader = () => {
  const circles = [0, 1, 2, 3];
  const animations = circles.map(() => useRef(new Animated.Value(0)).current);

  useEffect(() => {
    const animationsArray = animations.map((animation, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 2000,
            delay: index * 300,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      )
    );

    Animated.stagger(300, animationsArray).start();
  }, []);

  return (
    <View style={styles.loader}>
      {circles.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.circle,
            {
              transform: [
                {
                  scale: animations[index].interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 1.5, 1],
                  }),
                },
              ],
              opacity: animations[index].interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 0.5, 1],
              }),
            },
          ]}
        >
          <Animated.View
            style={[
              styles.dot,
              {
                transform: [
                  {
                    scale: animations[index].interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [1, 0, 1],
                    }),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.outline,
              {
                transform: [
                  {
                    scale: animations[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                ],
                opacity: animations[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
              },
            ]}
          />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 24,
  },
  circle: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "hsl(0, 0%, 87%)",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "hsl(0, 0%, 87%)",
  },
  outline: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "hsl(0, 0%, 87%)",
  },
});

export default CircleLoader;
