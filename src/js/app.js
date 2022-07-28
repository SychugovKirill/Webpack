import "../scss/app.scss";
import Tabs from "./modules/tabs";

const tabs = document.querySelectorAll(`[data-tabs]`);
if (tabs) {
  tabs.forEach((item) => new Tabs(item));
}

