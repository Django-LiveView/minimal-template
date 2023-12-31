import { connect, startEvents } from './webSocketsCli.js';
import { Application } from "./vendors/stimulus.js";
import pageController from "./controllers/page_controller.js";
import homeController from "./controllers/home_controller.js";

/*
   INITIALIZATION
 */

// WebSocket connection
connect();
startEvents();

// Stimulus
window.Stimulus = Application.start();

// Register all controllers
Stimulus.register("page", pageController);
Stimulus.register("home", homeController);
