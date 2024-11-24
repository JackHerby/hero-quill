// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    rules: {
      'antfu/if-newline': 'off',
      'node/prefer-global/process': 'off',
    },
  }),
)
