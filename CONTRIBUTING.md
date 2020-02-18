# Contributing

> Working on your first Pull Request? You can learn how from this *free* series
> [How to Contribute to an Open Source Project on
> GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Quick start

After you clone your forked repo, follow the following steps to bootstrap your local environment:

```bash
» yarn
» yarn develop
```

## Staying in sync with upstream

You can follow the steps described in [Syncing a
fork](https://help.github.com/articles/syncing-a-fork/). We recommend that you
keep your local master branch pointing to the upstream master branch. Remaining
in sync then becomes really easy:

```bash
git remote add upstream https://github.com/artbea/artbea-documentation.git
git fetch upstream
git branch --set-upstream-to=upstream/master master
```

Now, when you do `git pull` from your local `master` branch git will
fetch changes from the `upstream` remote. Then you can make all of
your pull request branches based on this `master` branch.

## Submitting a Pull Request

Please go through existing issues and pull requests to check if
somebody else is already working on it, we use `someone working on it`
label to mark such issues.
