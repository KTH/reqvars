[![Build Status](https://travis-ci.org/KTH/reqvars.svg?branch=master)](https://travis-ci.org/KTH/reqvars)

# reqvars

Check that [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env) contains all the **req**uired **var**iable**s**!

## Install

```sh
npm i @kth/reqvars
```

## Usage

1. Write a `.env.in` saying which environmental variables are required in your program. This will be your **specification file**.


    For example:

    ```ini
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    ```

    If you commit the file (which is recommended) remember to leave the secrets (passwords, etc.) blank

2. As early as possible in your application, require `reqvars` and call `check`:

    ```js
    require('@kth/reqvars').check()
    ```

    It will compare the `process.env` object against your **specification file** and throw an error if something is missing. By default it will look at the `.env` file in the root of your project.

3. If you want to use another file as specification file, pass the path as argument:

    ```js
    require('@kth/reqvars').check('./requirements.conf')
    ```

## Tips

### Usage with `dotenv`

If you use [`dotenv`](https://github.com/motdotla/dotenv), use it *before* `reqvars`:

```js
require('dotenv').config()
require('@kth/reqvars').check()
```

### Format for `.env.in`

The `.env.in` should be human readable. Document all fields as best as possible. For example:

```ini
# Credentials for the internal database. It should be a MySQL database.
DB_HOST=localhost
DB_USER=root
DB_PASS=
```
