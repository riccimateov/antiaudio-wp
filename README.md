
WhatsApp Bot with anti-audio and call rejection features
This is a Node.js application using the whatsapp-web.js library that allows you to create a simple WhatsApp bot with anti-audio and call rejection features.

Getting started
Prerequisites
Node.js v12 or higher installed on your computer.
Installation
Clone this repository to your local machine.
Open the terminal and navigate to the cloned directory.
Install the required dependencies by running the following command:
Copy code
npm install
Usage
To start the bot, run the following command in the terminal:
sql
Copy code
npm start
Scan the QR code with your WhatsApp account using the WhatsApp Web feature to authenticate the bot.
The bot is now ready to receive messages and make use of the anti-audio and call rejection features.
Commands
The bot supports two commands that can be entered through the command line interface:

enable antiaudio - Enables the anti-audio feature, which automatically replies to voice messages with a pre-configured response message.
disable antiaudio - Disables the anti-audio feature.
Features
Anti-audio
When the anti-audio feature is enabled, the bot will automatically reply to any voice messages it receives with a pre-configured response message.

Call rejection
The bot can automatically reject any incoming calls it receives.
