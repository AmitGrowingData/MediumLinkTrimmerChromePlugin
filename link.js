function getword(info,tab) {
	originalLink=info.linkUrl
  	indexOfQuestion=originalLink.indexOf("?")
  	newURL= originalLink.substring(0,indexOfQuestion)
  // 	chrome.tabs.create({  
  //   url: newURL
  // });
  //opening in an incognito window to avoid further tracking
  chrome.windows.create({"url": newURL, "incognito": true});

}

chrome.contextMenus.create({
  title: "Medium: %s", 
  contexts:["link"], 
  onclick: getword
});