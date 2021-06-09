const { exec } = require('child_process')
const { accessSync } = require('fs')
const { join } = require('path')

const getWorkspaceChildrenRecursive = (rootWorkspace, project) => {
  const workspaceList = [];
  for (const childWorkspaceCwd of rootWorkspace.workspacesCwds) {
    const childWorkspace = project.workspacesByCwd.get(childWorkspaceCwd);
    if (childWorkspace) {
      workspaceList.push(childWorkspace, ...getWorkspaceChildrenRecursive(childWorkspace, project));
    }
  }
  return workspaceList;
};

module.exports = {
  name: `plugin-build-storybook-addons`,
  factory: require => {
    const { structUtils } = require(`@yarnpkg/core`);

    return {
      default: {
        hooks: {
          afterAllInstalled(project) {
            const addons = getWorkspaceChildrenRecursive(project.topLevelWorkspace, project).filter(workspace => workspace.relativeCwd.startsWith('storybook/addon'))

            for (addon of addons) {
              try {
                accessSync(join(addon.cwd, 'dist'))
              } catch {
                exec(`yarn workspace ${addon.manifest.raw.name} build`)
              }
            }
          }
        }
      }
    }
  }
}
