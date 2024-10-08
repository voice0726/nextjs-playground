import fs from 'node:fs';

import type { NodePlopAPI } from 'plop';
const appRoot = 'src/app';
const componentDirName = '_components';
const componentRoot = `${appRoot}/${componentDirName}`;

/**
 *
 * @param dir
 * @param append
 * @returns {string[]}
 */
function dirWalk(dir: string, append = ''): string[] {
  let q: string[] = [];
  for (const f of fs.readdirSync(dir)) {
    if (f.startsWith('_') || f.startsWith('node_modules')) {
      continue;
    }
    if (fs.statSync(`${dir}/${f}`).isDirectory()) {
      const sep = append ? '/' : '';
      q.push(`${append}${sep}${f}`);
      q = [...q, ...dirWalk(`${dir}/${f}`, f)];
    }
  }

  return q;
}

module.exports = (plop: NodePlopAPI) => {
  plop.setGenerator('component', {
    description: 'react component',
    prompts: [
      {
        type: 'list',
        name: 'component-type',
        message: 'component type please',
        choices: ['feats', 'common'],
      },
      {
        when: (answers) => answers['component-type'] === 'feats',
        type: 'list',
        name: 'path',
        message: 'select directory',
        choices: dirWalk(`${__dirname}/src/app`).map((v) => `src/app/${v}/${componentDirName}`),
      },
      {
        when: (answers) => answers['component-type'] === 'common',
        type: 'input',
        name: 'path',
        message: '{path please}',
      },
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: (answers) => {
          if (answers['component-type'] === 'feats') {
            return `path: ${appRoot}/${answers.path}/${answers.name}?`;
          }
          return `path: ${componentRoot}/${answers.path}/${answers.name}?`;
        },
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
};
