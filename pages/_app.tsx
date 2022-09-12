import { ApolloProvider } from "@apollo/client"
import { client } from "./apollo"
import "../styles/globals.css"

const App = ({ Component, pageProps }) => {
  console.log(Component, pageProps)

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
