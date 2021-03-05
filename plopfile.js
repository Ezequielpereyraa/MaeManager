const actions = {
  index: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/index.js`,
    templateFile: `plop/index.js.hbs`,
  },
  component: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/{{pascalCase name}}.jsx`,
    templateFile: `plop/component.jsx.hbs`,
  },
  styles: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
    templateFile: `plop/styles.scss.hbs`,
  },
};

module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "empty component",
    prompts: [
      {
        type: "input",
        default: "src",
        name: "destinationpath",
        message: "Destination path",
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [actions.component, actions.index, actions.styles],
  });
};
