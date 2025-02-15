import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.ts";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <Container>
                <>Home Page</>
            </Container>
    </ThemeProvider>
  )
}

export default App
