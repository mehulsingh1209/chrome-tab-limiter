const MAX_TABS = 10;

chrome.tabs.onCreated.addListener(async () => {
  const tabs = await chrome.tabs.query({ windowId: chrome.windows.WINDOW_ID_CURRENT });
  if (tabs.length > MAX_TABS) {
    // Close the oldest tab (lowest ID)
    const oldest = tabs.sort((a, b) => a.id - b.id)[0];
    chrome.tabs.remove(oldest.id);
  }
});
