# GEEK-TODO

💻 A Powerful todo-cli build for *geeks* based on Node.js

## 🎈 Overview
+ 🎨 **Foucus on Today**, User friendly, Efficient
+ 🔗 Cross-platform compatibility
+ 🔎 Basic usage
  + use `todo` to initialize
  + use `todo add` to add todo item
  + use `todo list` to show your todo-list for today
  + use `todo done` or `todo undone` to change status of your items
  + use `todo remove` to remove your items
+ 🕶 Pro features
  + flags/options (on subcommand `list`, `done`, `undone`):
    + `--all`, `--past`, `--range`
  + batch operation
    + handle more than one items in one go
+ 📌 Forget the correct spell? get help using `--help`
  + `todo done --help`

---
## 🎁Install

Two options are provided to install `geek-todo`, **both option requires a Node.js run time pre-installed on your machine.**
[Don't have Node.js installed yet? Check this out](https://nodejs.org/en/)

Installation process on macOS / Windows / *nix are identical
### npm install
run command
```bash
npm install geek-todo -g
```

### source code install

1. clone repository
```bash
git clone git@github.com:snow2512/geek-todo.git
```

2. install dependencies:
run command in project root directory
```bash
npm install geek-todo -g
```

3. link bins to your enviroment
run in project root directory
```bash
npm install geek-todo -g
```

---
## 📃Usage & Examples

### 🛠Init

Use `todo` to initailize local database and setup the project

### ✏`todo add`

Add todo items to today's list
### 🖨`todo list`

List todo-list for today

#### `todo list --all` or `todo list -a`
List all todo items you ever created

#### `todo list --past=1` or `todo list -p=1`

Review todo-list for yesterday, if you want to view the list for day before yeserday, use `--past=2` or `-p=2`

In fact, when `--past=x` is specified, you will get your todo-list `x` days before

#### `todo list --range=2-5` or `todo list -r=2-5`

List all todo items created after 5 days ago and before 2days ago.

All items in range specified using `--range=x-y` will be listed
### ✨`todo done`

List and rank items first, and open a interactive input prompt wait for your input.

Use `--all`, `--past`, `--range` to specify range of items to be displayed.

When no flags are given, items for today will be displayed by default.

Items you selected will be marked as complated.

#### Batch operation (**recommend**)

When selecting items to be marked as completd, you can mark more than one item

   + use expressions like `1-5` to select items `1,2,3,4,5` in one go
   + use expressions like `1,2,3` to select items `1,2,3` in one go
   + use expressions like `1-3,6-9,11` to select items `1,2,3,6,7,8,9,11` in one go

These input pattern can be flexible and thus promote your efficiency greatly
### ⌛`todo undone`

Mark items as undone. usage similar to `todo done`, flags like `--all`, `--past`, `--range` and batch operation are also supported

### 🗑`todo remove`

Mark items as undone. usage similar to `todo done`, flags like `--all`, `--past`, `--range` and batch operation are also supported

