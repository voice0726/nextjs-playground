import fs from 'node:fs';

import type { NodePlopAPI } from 'plop';

const appRoot = 'src/app';
const componentDirName = '_components';
const componentRoot = `${appRoot}/${componentDirName}`;

const __dirname = import.meta.dirname;

const dirWalk = (dir: string) => {
  const paths = fs.readdirSync(dir);
  const dirs = [];
  for (const path of paths) {
    if (path.startsWith('.') || path.startsWith('node_modules')) {
      continue;
    }
    const stats = fs.statSync(`${dir}/${path}`);
    if (stats.isDirectory()) {
      dirs.push(path);
    }
  }

  return dirs;
};

export default function (plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: 'react component',
    prompts: [
      {
        type: 'list',
        name: 'component-type',
        message: 'component type?',
        choices: ['feats', 'common'],
      },
      {
        when: (answers) => answers['component-type'] === 'feats',
        type: 'list',
        name: 'path',
        message: 'component directory?',
        choices: dirWalk(`${__dirname}/${appRoot}`)
          .filter((v) => !v.endsWith(componentDirName))
          .map((v) => `src/app/${v}/${componentDirName}`),
      },
      {
        when: (answers) => answers['component-type'] === 'common',
        type: 'input',
        name: 'path',
        default: componentRoot,
        message: 'component directory?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'component name?',
        validate: (i) => typeof i === 'string' && i.length > 0,
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: (answers) => `path: '${answers.path}/${answers.name}'?`,
      },
    ],
    actions: (p) => {
      if (p?.confirm) {
        return [
          {
            type: 'add',
            path: '{{path}}/{{kebabCase name}}/index.tsx',
            templateFile: 'plop-templates/component/index.tsx.hbs',
          },
          {
            type: 'add',
            path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
            templateFile: 'plop-templates/component/Component.tsx.hbs',
          },
          {
            type: 'add',
            path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
            templateFile: 'plop-templates/component/Component.stories.tsx.hbs',
          },
          {
            type: 'add',
            path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
            templateFile: 'plop-templates/component/Component.test.tsx.hbs',
          },
        ];
      }

      return [];
    },
  });
}
