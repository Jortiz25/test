# PSE-AVANZA

(insert pse-avanza description)

## Starting  🚀

These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes.

### Pre-requirements 📋

To use the project it is necessary to install `Nodejs >= 16.x`.

Please read the documentation to add, remove or update the project, below some of the most used commands

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn or yarn install
```

Start the server

```bash
  yarn dev
```

## Run Test

Run unit test

```bash
  yarn test
```

Run coverage test

```bash
  yarn test:coverage
```

## Folder structure 🦴

    .
    ├── src                     # Source files
    │   ├── assets              # Icons, Images, fonts
    │   ├── core                # Root application for layout and routes
    │   ├── store               # Configuration for global store
    │   └── shared              # Components, logic, hooks that could be re-used
    ├── public                  # Tools and utilities
    └── README.md



## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

`VITE_BASE_URL_API`

## Encoding style  ⌨️

**Getting started with [React Styleguidist](./STYLEGUIDE.md)**

## Built with  🛠️

- [ReactJS](https://reactjs.org/docs/getting-started.html)  - **React** is a JavaScript library for building user interfaces

- [Yarn](https://yarnpkg.com/) is the default package management system

## Contributing  🖇️

To contribute to the project please follow the steps below, do not forget to describe the changes in the pull request and comment on it by slack in the corresponding channel. `We work with GITFlow, if you don't know about it you can read here` [Git flow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=%C2%BFQu%C3%A9%20es%20Gitflow%3F,vez%20y%20quien%20lo%20populariz%C3%B3),
The only thing that changes is that we don't use the release branch, but certification; Additionally, the branches are taken from Master (in case of new features) since the branches of the other environments are divergent. 

## The Naming of branches

The Naming of branches remember that it goes with the following SYNTAX "PREFIJO_HU"-###; example: SPPROD-414... The same with commits, when making a commit, always indicate which HU it belongs to, for example: "SPPROD-414 initial commit", this in order to be able to determine in the future which HU corresponds to if needed.

1. Fork of the repository.
2. Clone the repository.
3. Update the master branch.
4. Create a branch.
5. Make changes.
6. Make a Pull Request.

