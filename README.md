[![Build Status](https://travis-ci.org/KTH/reqvars.svg?branch=master)](https://travis-ci.org/KTH/reqvars)

# reqvars

Check that [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env) contains all the **req**uired **var**iable**s**!

## Install

```sh
npm i @kth/reqvars
```

## Usage

1. Write a `.env.in` saying which environmental variables are required in your program. This will be your specification file.


  For example:

  ```ini
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=
  ```

  If you commit the file (which is recommended) remember to leave the secrets (passwords, etc.) blank

2. As early as possible in your application, require and call `check`:

   ```js
   require('@kth/reqvars').check()
   ```

   It will throw an error if some variable is missing

3. If you want to use another path, pass it as argument:

   ```js
   require('@kth/reqvars').check('./requirements.conf')
   ```