document.addEventListener('DOMContentLoaded', () => {
  const processButton = document.getElementById('processButton');
  const copyButton = document.getElementById('copyButton');
  const inputText = document.getElementById('inputText');
  const responseDiv = document.getElementById('response');

  processButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (!text) {
      responseDiv.textContent = 'Please enter some text to process';
      return;
    }

    responseDiv.textContent = 'Processing...';
    
    chrome.runtime.sendMessage(
      { action: 'processText', text: text },
      (response) => {
        if (response.error) {
          responseDiv.textContent = `Error: ${response.error}`;
        } else {
          responseDiv.textContent = response.result;
          copyButton.style.display = 'block';
        }
      }
    );
  });

  copyButton.addEventListener('click', () => {
    const textToCopy = responseDiv.textContent;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        responseDiv.textContent += '\n\n(Copied to clipboard!)';
      })
      .catch(err => {
        responseDiv.textContent += `\n\n(Failed to copy: ${err.message})`;
      });
  });
});
