import React, { useEffect } from 'react'
import i18n from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDropDown from '../components/LanguageDropDown';


//useTranslation()x1
//object.method()
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
        en: {
            translation: {
              "calculator": "Calculator"
            }
        },
        hi: {
            translation: {
              "calculator": "कैलकुलेटर"
            }
        },
        gu: {
            translation: {
              "calculator": "કેલ્ક્યુલેટર"
            }
        },
        bn: {
            translation: {
              "calculator": "ক্যালকুলেটর"
            }
        },
    },
    lng: "gu", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
});



export default function Calculator() {

    //2.1 Hooks area
    const { t }  = useTranslation();

    useEffect(()=>{
        
    },[])
    //2.2 functions definaton


    //2.3 Return state

    return (
        <>
            <LanguageDropDown />
            <h1>Calculator Design Using HTML Layout</h1>
            <div className="container">
                <div className="header">{t('calculator')}</div>
                <input type="text" className="result" />
                <div className="first-row">
                <input type="button" name defaultValue="√" className="global" />
                <input type="button" name defaultValue="(" className="global" />
                <input type="button" name defaultValue=")" className="global" />
                <input type="button" name defaultValue="%" className="global" />
                </div>
                <div className="second-row">
                <input type="button" name defaultValue={7} className="global" />
                <input type="button" name defaultValue={8} className="global" />
                <input type="button" name defaultValue={9} className="global" />
                <input type="button" name defaultValue="/" className="global" />
                </div>
                <div className="third-row">
                <input type="button" name defaultValue={4} className="global" />
                <input type="button" name defaultValue={5} className="global" />
                <input type="button" name defaultValue={6} className="global" />
                <input type="button" name defaultValue="X" className="global" />
                </div>
                <div className="fourth-row">
                <input type="button" name defaultValue={1} className="global" />
                <input type="button" name defaultValue={2} className="global" />
                <input type="button" name defaultValue={3} className="global" />
                <input type="button" name defaultValue="-" className="global" />
                </div>
                <div className="conflict">
                <div className="left">
                    <input type="button" name defaultValue={0} className=" big" />
                    <input type="button" name defaultValue="." className=" small" />
                    <input type="button" name defaultValue="Del" className=" red small white-text top-margin" />
                    <input type="button" name defaultValue="=" className=" green white-text big top-margin" />
                </div>
                <div className="right">
                    <input type="button" name defaultValue="+" className="global grey plus" />
                </div>
                </div>
            </div>
        </>
    )
}