

chrome.browserAction.onClicked.addListener(function (e) {
  chrome.permissions.request({ permissions: ['tabs', 'clipboardRead'] }, function (a) {
    console.log(a)
    chrome.tabs.query({}, function (tabs) {
      console.log(tabs);
      const unActiveTabs = tabs.filter(v => !v.active && !v.discarded);
      console.log(tabs[0].title);
      for (let tab of unActiveTabs) {
        chrome.tabs.discard(tab.id, function (r) {
          console.log(r);
        });
      }
    })
  });

});
