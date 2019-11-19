  document.addEventListener('DOMContentLoaded', function() {

     but=document.getElementById('paraText')
     but.innerText=window
	document.addEventListener('mouseup', function() {

		alert("The window hs kja;")
	}, false);

}, false);


/*
    var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f=d.createElement('P');

     selectedText=window.getSelection().toString();
      alert(selectedText+"Here is it")
     d.body.appendChild(f)
     but=document.getElementById('paraText')
     but.innerText=window.getSelection().toString()
     but.innerText="10000"



    });
  }, false);*/
