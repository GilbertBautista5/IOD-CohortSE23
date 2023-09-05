import { useThemeContext, themes } from "../context/MyThemeContext"

function ThemeSwitcher() {
    const {setTheme, darkMode} = useThemeContext();
    
    return (
        <label>Dark mode? <input type="checkbox" value={darkMode} onChange={(e) => setTheme(darkMode ? themes.light : themes.dark)}/></label>
    )
}

export default ThemeSwitcher;