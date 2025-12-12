# 1.0.0 (2025-12-05)

### Bug Fixes

- log emailCodes when verification code expires ([2a6fb58](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/2a6fb58bfbb3e885d1f9f600b60e1cd832e64d13))
- remove trailing whitespace in CI workflow configuration ([0f1a411](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/0f1a411141a8679a8aaaf3e48dca529afe92efed))
- remove unused Prisma models and generated files to clean up the schema and reduce bloat ([47c285c](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/47c285c3c16848e9368765e59367a52726ef3999))
- update Node.js version in CI and modify server log output for clarity ([33079bd](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/33079bd9fe9dcf3e21d98098a3a9b8c929fec5ab))
- update User model fields to be optional and adjust related types ([79fcca8](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/79fcca864e86e23d5fcf5a40f41689a8c4c53edb))

### Features

- add CI workflow for automated testing and building ([22c14af](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/22c14afaf2be7133c53ca573fdfe395a76b4d1b1))
- add husky pre-commit hook and update package dependencies ([9a36de9](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/9a36de92b511ede8a79824aeaee0fbb065cec624))
- add image handling in updateUserById function ([e240c3d](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/e240c3d452708d272979fc2a6677b237aa6d7700))
- add Image model and update UserPost to support multiple images ([3ea12a1](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/3ea12a12a10369b9c7cbc30c3450df27aee8ce93))
- add prettier check script to package.json ([4d9d2c6](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/4d9d2c64de171b2bc22ed0609d4fbf00e7b52f45))
- add status_message to Friendship model and update related files ([107b7c4](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/107b7c4ef29d385a30025c6f18667ef758e2b38a))
- add surname, dateOfBirth, and signature fields to User model ([ef3aba4](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/ef3aba46e5ab56bf3980e4712e5c5df765bdeb38))
- enhance getPosts and editPost functions to include tag details in responses ([10dfee4](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/10dfee41f72e5d3afdf25acf17996a001716cb34))
- Enhance post handling by including tags in getPosts and createPost, and improve deletePost functionality ([84d38f9](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/84d38f95cced945bd41b31a288e25966e6c3f77c))
- implement deleteAllMessagesFromChat functionality and update related files ([2c822df](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/2c822dfba3cb78111324e9c257acda0b6417cc67))
- implement image upload and validation in updateUserById function ([bc16a45](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/bc16a4573dbbeab2a4880d8b385ab08f3fe92657))
- Implement post management features including creation, editing, and deletion of posts ([ac48b6e](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/ac48b6eabf2bf6ca345ba75894723433c4f0ace9))
- **prisma:** add WASM loaders for edge and worker environments ([6df4c08](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/6df4c08bb609c764869dac2c4dd109f18033d512))
- Refactor UserPost model to use many-to-many relationship with Tags ([225b681](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/225b6816989996259a2eaa938626ba3d3f5e2885))
- update password validation and registration process in userService ([93dfa5d](https://github.com/sema-gr/WorldItSocialNetwork-Back-End/commit/93dfa5daf620ba83ce938f11fa906a11cd3fc968))
