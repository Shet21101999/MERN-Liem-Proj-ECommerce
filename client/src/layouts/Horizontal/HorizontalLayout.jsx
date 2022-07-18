import React from "react";
import { withTranslation, useTranslation } from "react-i18next";

const Horizontal = (props) => {
  const { t } = props;
  const { i18n } = useTranslation();
  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div>{t("username")}</div>
      <div>{t("password")}</div>
      <button onClick={() => onChangeLanguage("vi")}>VI</button>
      <button onClick={() => onChangeLanguage("en")}>EN</button>
    </>
  );
};

const HorizontalLayout = withTranslation()(Horizontal);

export default HorizontalLayout;
