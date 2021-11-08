module.exports = {
  // hooks: {
  //   'after:bump': ['auto-changelog -p', 'git add CHANGELOG.md'],
  // },
  git: {
    // changelog: 'auto-changelog --stdout --commit-limit false --unreleased --template changelog-compact.hbs',
    changelog: '',
    commit: true,
    commitMessage: 'chore: release v${version} - [ci skip]',
    push: true,
    pushArgs: ['--follow-tags'],
    tag: false,
  },
  github: {
    release: false,
  },
  gitlab: {
    release: false,
  },
  npm: {
    ignoreVersion: false,
    // publish: true,
    publish: false,
  },
};
