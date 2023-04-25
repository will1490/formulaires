import { configForm } from "./form.js";
import { configAge } from "./form.js";
import { configPwd } from "./form.js";
import { configDarkMode } from "./form.js";
import { toggleDarkMode } from "./dark-mode.js";


function init() {
    configForm();
    configAge();
    configPwd();
    toggleDarkMode();
  }
  
  init();
