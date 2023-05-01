import { createContext } from "react";


let defaultStrings:string[] = [];
const LocalizedStringsContext = createContext(defaultStrings);

export default LocalizedStringsContext;