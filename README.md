# GPT-4 Text Processor Chrome Extension

A Chrome extension that processes text using GPT-4 with customizable system prompts.

## Features
- Process text using GPT-4
- Customizable system prompt
- Save OpenAI API key
- Copy processed text to clipboard
- Access settings via context menu

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the directory containing this extension
6. The extension will appear in your extensions list

## Usage

1. Click the extension icon to open the text processor
2. Enter your text in the input box and click "Process Text"
3. View the processed result
4. Use the "Copy to Clipboard" button to copy the result

## Settings

1. Right-click anywhere and select "GPT-4 Processor Settings"
2. Enter your OpenAI API key
3. Set your desired system prompt (default: "Please make it readable")
4. Click "Save Settings"

## Requirements

- OpenAI API key
- Chrome browser (version 88 or later)

# prompt I used to create this extension

I want you to create a Chrome extension project for me for the scratch in the current folder. This extension should have a separate settings window, which I want to open using a context menu. In the settings, I want to be able to specify the OpenAI API key and the system prompt for the GPT-4o model. The default value is "Please make it readable".
The extension itself should show a window, which opens with a left mouse button click. This window should have a text area for entering a text. Upon pasting a text, the extension should send an OpenAI API request, with a system prompt and text.
The response from the model should be shown in the window. Also, there should be a "copy to clipboard" button which copies the model response to the clipboard.

Also, create a readme file with an explanation about how to install the extension locally.
