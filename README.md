# Chaos Lambda

Netflix's [Chaos Monkey](https://github.com/Netflix/SimianArmy) rebuilt with 2015 technology.

**DO NOT RUN THIS AS-IS**

This is an early WIP. It will kill an instance at random when run. There is no customizable logic yet.

## Setting Up

- Set up a role for the function in AWS Console
- Fill out .env (see [.env.example](.env.example) for a template)
- Run `npm run deploy`

To verify, log into AWS Console, and check to see that a new Lambda function has been created.
