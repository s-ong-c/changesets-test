import { GlobalStyle } from '../packages/ui/src/GlobalStyle'
import { Provider } from '../packages/ui/src'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
]
