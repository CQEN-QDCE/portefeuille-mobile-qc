import { initLanguages } from 'aries-bifold'
import React from 'react'
import { LogBox } from 'react-native'

import qcwallet from './src'
import StorybookUIRoot from './storybook'

const { localization } = qcwallet

initLanguages(localization)

LogBox.ignoreAllLogs()

const Base = () => {
  return <StorybookUIRoot />
}

export default Base
