import {Tree, formatFiles, installPackagesTask} from '@nrwl/devkit';
import {libraryGenerator} from '@nrwl/workspace/generators';

interface Schema {
}

export default async function (tree: Tree, schema: any) {

  const libraryName = schema.name.startsWith('util') ? schema.name : `util-${schema.name}`;
  await libraryGenerator(tree, {
    name: libraryName, directory: schema.directory,
    tags: `type:util, scope:${schema.directory}`
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
