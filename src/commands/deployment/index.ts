import { Command } from "../command";
import { createCommandDecorator } from "./create";
import { commandDecorator as dashboardCommandDecorator } from "./dashboard";
import { commandDecorator as getCommandDecorator } from "./get";
import { onboardCommandDecorator } from "./onboard";
import { validateCommandDecorator } from "./validate";

/**
 * `deployment` command
 */
export const deploymentCommand = Command(
  "deployment",
  "Introspect your deployments",
  [
    getCommandDecorator,
    onboardCommandDecorator,
    validateCommandDecorator,
    dashboardCommandDecorator,
    createCommandDecorator
  ]
);
