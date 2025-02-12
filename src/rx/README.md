The files in this folder reexport some essential dependencies to avoid having them in dependent apps along with all the problems like verison conflicts and NestJS not working due to multiple instances of `@nestjs/core`.

I could (and should) have used multiple entry points via the `exports` block in `package.json`, but this requires having `module: ESNext` in `tsconfig.json`, and that, in turn, makes it impossible to `import * from 'chai'` normally 🫠.

So currently going with this not very cool yet working approach.