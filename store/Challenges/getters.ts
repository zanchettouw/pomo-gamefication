import { Getters, State } from './types'

export default {
  challengesLength: (state: State) => state.allChallenges.length,
  currentXpPercentage: (state: State) => {
    const percentage = (state.xp.current / state.xp.end) * 100
    return Number(percentage.toFixed(2))
  },
  currentChallenge: (state: State) =>
    (typeof state.currentChallengeIndex === 'number')
      ? state.allChallenges[state.currentChallengeIndex]
      : null
} as Getters
