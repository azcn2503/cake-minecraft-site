import { createContext } from "react";

const SiteContext = createContext({
  webFontsLoaded: false,
  cakeEmoji: null
});

export default SiteContext;
