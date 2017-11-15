# Jira certificate tester

Minimum viable product for testing certificates with Jira.

# 1. Requirements

Node:
```
$ node -v
```

npm:
```
$ npm -v
```

# 2. Installation (downloading required modules)

```
$ npm install
```

# 3. Running the test

```
$ node index.js
```

1. Input the url to your JIRA instance, e.g. `https://jira.atlassian.com/`
1. Input your username
1. Input your password (hidden)

# A. Skipping the URL

Typing URL can be skipped by uncommenting the line in `index.js` and hardcoding the URL into the variable `config.url`
