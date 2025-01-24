chrome.runtime.onInstalled.addListener(() => {
  // Create context menu for settings
  chrome.contextMenus.create({
    id: "settings",
    title: "GPT-4 Processor Settings",
    contexts: ["all"]
  });
  
  // Set default system prompt
  chrome.storage.sync.set({
    systemPrompt: "Please make it readable"
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "settings") {
    chrome.runtime.openOptionsPage();
  }
});

// Handle messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "processText") {
    chrome.storage.sync.get(["apiKey", "systemPrompt"], (data) => {
      if (!data.apiKey) {
        sendResponse({ error: "API key not set" });
        return;
      }

      fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${data.apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            { role: "system", content: data.systemPrompt },
            { role: "user", content: request.text }
          ]
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          sendResponse({ error: data.error.message });
        } else {
          sendResponse({ result: data.choices[0].message.content });
        }
      })
      .catch(error => {
        sendResponse({ error: error.message });
      });
    });
    return true; // Keep message channel open for async response
  }
});
