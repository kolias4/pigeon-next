import { useRouter } from "next/router"
import ReactFlagsSelect from 'react-flags-select';



const LangSelector = () => {

    const router = useRouter()

    const {locale,locales,asPath} = router
    const handleLangChange = (val) => {
        let lang = val == 'GR'? 'el':'en'
        router.push(asPath, asPath, { locale:lang})
    }
    return (
        <>
        <ReactFlagsSelect
        countries={["GR","GB"]}
        selected={locale == 'el'? 'GR':'GB'}
        className="menu-flags"
        selectButtonClassName="menu-flags-button"
        customLabels={{"GR": "EL","GB": "EN"}}
        onSelect={handleLangChange}
     />


     </>
    )
}

export default LangSelector
