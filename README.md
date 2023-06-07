<p align="center">
  <a href="https://paystack.com/docs" target="_blank">
    <img alt="Paystack Logo" src="https://paystack.com/blog/public/assets/images/logo/paystack-logo-dark.svg" />
  </a>
</p>
<h1 align="center">
  Paystack's Documentation Code Snippets
</h1>

Code snippets for the [Paystack's Developer Documentation](https://paystack.com/docs). This aim of this project is to separate code snippets from the design and content of the documentation so code management processes can be put in place to ensure code correctness.

## 🚀 Quick start

1.  **Clone repo**


    ```sh
    # Clone repo
    git clone git@github.com:PaystackOSS/doc-code-snippets.git
    ```

2.  **Install dependencies**

    Navigate into the project folder and run the command below

    ```sh
    # Install dependencies
    npm install
    ```

3.  **Open the source code and start editing!**

    Open the project in your code editor and make the required changes. When done, run the command below:

    ```sh
    # Build dist
    npm run build
    ```

  You can now push and open a PR if you want to contribute to the project.


## 🧱 Code structure

Here's a high-level overview of the directories and files in this project:

    .
    ├── .github
    ├── dist
    ├── node_modules
    ├── src
       ├── api
       ├── doc
       ├── index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`.github`**: This directory contains the workflow to notify the documentation when a change occurs.
   
2.  **`dist`**: This directory contains the JS literals and JSON that the documentation can consume directly **(You shouldn't change the content of this directory manually)**.

3.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

4.  **`/src`**: This directory contains the code snippets in the default language for the [documentation](https://paystack.com/docs) (`doc`), the [API Reference](https://paystack.com/docs/api) (`api`) and an `index.js` file that converts contents of both directories into the `dist` directory.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

7.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

8.  **`README.md`**: A text file containing useful reference information about the project.