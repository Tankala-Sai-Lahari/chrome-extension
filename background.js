chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { cancel: true };
    },
    {
      urls: [],
      types: ["main_frame"]
    },
    ["blocking"]
  );
  
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.blockList) {
      const blockList = changes.blockList.newValue.map(site => `*://${site.trim()}/*`);
      chrome.webRequest.onBeforeRequest.removeListener();
      chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          return { cancel: true };
        },
        {
          urls: blockList,
          types: ["main_frame"]
        },
        ["blocking"]
      );
    }
  });
  