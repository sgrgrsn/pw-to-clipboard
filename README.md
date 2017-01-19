# pw-to-clipboard
Generate strong passwords directly from your terminal to your clipboard, ready to paste in where you need it. 

This little CLI is built on top of [generate-password](https://www.npmjs.com/package/generate-password) npm package, and you can configure it with the same [options](https://www.npmjs.com/package/generate-password#available-options).

Install the package globally and type `pw-to-clipboard` in your terminal. You will now have a new strong password copied into your clipboard.

## Install and set up
`npm install pw-to-clipboard -g`

You will be asked a few questions about how you would like your passwords.

1. **Would you like numbers in your passwords?** _(default is 16 characters)_
2. **Would you like symbols in your passwords?** _(default is yes)_
3. **Would you like uppercase letters in your passwords?** _(default is yes)_
4. **Would you like to exclude similar characters in your passwords?** _(default is yes)_
5. **If you want to exclude special characters from your passwords, then type them here:**  _(default is '')_
6. **Would you like to include at least one character from each character type in your passwords?** _(default is yes)_
7. **Would you like to see the generated passwords in the console output** _(default is no)_
