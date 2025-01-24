document.addEventListener('DOMContentLoaded', () => {
  // Load saved settings
  chrome.storage.sync.get(['apiKey', 'systemPrompt'], (data) => {
    document.getElementById('apiKey').value = data.apiKey || '';
    document.getElementById('systemPrompt').value = data.systemPrompt || 'Please make it readable';
  });

  // Save settings
  document.getElementById('save').addEventListener('click', () => {
    const apiKey = document.getElementById('apiKey').value;
    const systemPrompt = document.getElementById('systemPrompt').value;

    chrome.storage.sync.set({
      apiKey: apiKey,
      systemPrompt: systemPrompt
    }, () => {
      alert('Settings saved successfully!');
    });
  });
});
