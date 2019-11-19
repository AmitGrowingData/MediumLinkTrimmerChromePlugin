
function getword(info,tab) {
	originalLink=info.linkUrl
  	indexOfQuestion=originalLink.indexOf("?")
  	newURL= originalLink.substring(0,indexOfQuestion)
  	chrome.tabs.create({  
    url: newURL
  });

}

chrome.contextMenus.create({
  title: "Medium: %s", 
  contexts:["link"], 
  onclick: getword
});