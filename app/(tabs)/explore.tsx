import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AboutMeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="person-circle-outline" style={styles.headerImage} />}>
      <View style={styles.titleContainer}>
                <ThemedText type="title">About Me</ThemedText>
      </View>
      
      <ThemedText>
        Hello! I'm Denver M. Mateo, a Computer Engineering student and I love eating.
      </ThemedText>

      <Collapsible title="My Interests">
        <ThemedText>
          I have a keen interest in:
          {'\n'}• Mobile app development
          {'\n'}• Data science and analytics
          {'\n'}• Artificial intelligence
          {'\n'}• Robotics
        </ThemedText>
      </Collapsible>

      <Collapsible title="My Skills">
        <ThemedText>
          I have experience with:
          {'\n'}• JavaScript and React Native
          {'\n'}• Python for data analysis
          {'\n'}• C/C++ for embedded systems
          {'\n'}• Machine learning basics
          {'\n'}• Networking
        </ThemedText>
      </Collapsible>

      <Collapsible title="My Projects">
        <ThemedText>
          Here are a few projects I've worked on:
          {'\n'}• Goal tracking app (this app!)
          {'\n'}• Smart Water Faucet
          {'\n'}• Digital twin for water pipeline monitoring
        </ThemedText>
      </Collapsible>

      <Collapsible title="Get in Touch">
                <ThemedText>
                    Feel free to reach out through:
                </ThemedText>
                <ThemedText>
                    <ExternalLink href="https://www.linkedin.com/in/denvermateo">
                        LinkedIn
                    </ExternalLink>
                </ThemedText>
                <ThemedText>
                    <ExternalLink href="https://github.com/DenverMateo">
                        GitHub
                    </ExternalLink>
                </ThemedText>
            </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
