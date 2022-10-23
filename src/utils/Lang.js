import  { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Lang = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
  
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
        document.querySelector("html").style.direction = "rtl";
        document.querySelector("html").lang = "ar";
      } else {
        document.querySelector("html").style.direction = "ltr";
        document.querySelector("html").lang = "en";
      }
    }
  }, [i18n.language]);

  return null;
};

export default Lang;
