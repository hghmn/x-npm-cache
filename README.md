# npm cache test

Verify local cache for npm dependencies is configured. The command below should show the cache configured for the local defined in `.npmrc`.

```sh
$ npm config get cache
> $PWD/.npmcache
```

Install dependencies

```sh
$ npm ci
```

Ensure the cache is populated

```sh
$ ls -l .npmcache
```
