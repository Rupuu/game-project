import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation:{
                helpPage: {
                    greeting: "Welcome to the help page!",
                    information: "Here you can find all the information you need on how to use the device",
                    instructions:{
                        step1: {
                            title: "1. Choose one of the avaliable stations from 1-4.",
                        },
                        step2:{
                            title: "2. Please select one of the following options:",
                        },
                        step3:{
                            title: "3. Select Payment Method for",
                        },
                        cardInfo:{
                            title: "How to use",
                            description1: {
                                step1:'To do this',
                                step2:'After that',
                                step3:'Finally',
                            },
                            description2: {
                                step1:'To do this 2',
                                step2:'After that 2',
                                step3:'Finally 2',
                            }
                        }
                    }
                    }
                }
                
            },
        bg:{
            translation:{
                helpPage:{
                    greeting: "Добре дошли на помощната страница!",
                    information: "Тук можете да намерите всички информация за как да използвате устройствато",
                    instructions:{
                        step1: {
                            title: "1. Изберете една от свободните станции от 1-4.",
                        },
                        step2:{
                            title: "2. Моля изберете една от следните опции:",
                        },
                        step3:{
                            title: "3. Изберете метод за плащане за",
                        },
                        cardInfo:{
                            title: "Как да използваш",
                            description1: {
                                step1:'Направи това',
                                step2:'След това',
                                step3:'Накрая',
                            },
                            description2: {
                                step1:'Направи това 2',
                                step2:'След това 2',
                                step3:'Накрая 2',
                            }
                        }
                    }
                }
            }
        }
    }   
});
