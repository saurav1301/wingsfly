import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SIZES, COLORS } from '../utils/constants';

interface Props {
  quote: string;
  progress: number; // 0 to 1
  theme?: typeof COLORS.light;
}

const ProgressBar: React.FC<Props> = ({ quote, progress, theme = COLORS.light }) => {
  const percentage = Math.min(Math.max(progress * 100, 0), 100);

  return (
    <View>
      <Text style={[styles.title, { color: theme.darkText }]}>Today's Quote</Text>
      <Text style={[styles.quote, { color: theme.darkText }]}>
        "this is the app"
      </Text>

      <Text style={[styles.progressLabel, { color: theme.primary }]}>
        Progress {Math.round(percentage)}%
      </Text>

      <View style={[styles.track, { backgroundColor: theme.lightGray }]}>
        {/* Base progress fill */}
        <View
          style={[
            styles.fill,
            {
              width: `${percentage}%`,
              backgroundColor: theme.primary,
            },
          ]}
        />

        {/* Glowing gradient trail */}
        <LinearGradient
          colors={[
            'rgba(38,50,140,0)',      // transparent start
            'rgba(38,50,140,0.2)',    // faint mid
            'rgba(38,50,140,0.6)',    // strong end
            'rgba(38,50,140,0.85)',   // intense tip
          ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[
            styles.glowTrail,
            {
              width: `${percentage}%`,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
  },
  quote: {
    fontStyle: 'italic',
    fontSize: SIZES.title,
    textAlign: 'center',
    marginBottom: 12,
  },
  progressLabel: {
    fontSize: 12,
    marginBottom: 6,
  },
  track: {
    height: 8,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#E0E0E0',
    position: 'relative',
  },
  fill: {
    position: 'absolute',
    height: 8,
    borderRadius: 10,
    zIndex: 0,
  },
  glowTrail: {
    position: 'absolute',
    height: 20,
    top: -6,
    borderRadius: 12,
    zIndex: 1,
  },
});

export default ProgressBar;
