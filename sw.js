if ('serviceWorker' in navigator) { 
navigator.serviceWorker.register('/workers/sw.js', {scope : '/workers/'}).then(function(reg) { 
	console.log('succesfully registered.scope is ' + reg.scope); }).catch(function(error) { 
		console.log('not succesfully registered. failed with ' + error); 
	});
}; 