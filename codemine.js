function widget(name,editor,interval, runButton){
	this.name = name;
	this.editor = editor;
	this.runButton = runButton;
	this.timeInterval = interval;
	this.localScore = 0;
	this.enabled=true;
	this.finished=true;		
	this.interval;
	
	this.run = run;
	function run(w){
		this.runButton.disabled=true;
		this.editor.disabled=true;
		this.enabled = false;
		this.finished = false;
		
		/*alert('000 '+this.localScore);
		alert('000 '+w);*/
		
		this.localScore = 0;
		var editorTxt = this.editor.getValue();
		this.interval = setInterval(function(){transferToGlobalScore(w)},this.timeInterval);
		
		try {
			eval(editorTxt);
		} catch (e) {				
			alert("Error in your code: " + e.message);
		}						
		this.finished = true;
	}

	this.mindLocal = mindLocal;		
	function mindLocal(){
		//alert('aaa '+this.localScore);
		this.localScore++;
		//alert('aaa '+this.localScore);
	}
	
}	

function transferToGlobalScore(w){
	/*alert('bbb '+w);
	alert('bbb '+w.finished);
	alert('bbb '+w.localScore);*/
	if(w.localScore>0){
		//alert('ccc');
		w.localScore--;
		globalScore++;
		document.getElementById('gloabal_score').value = globalScore;
	} else {
		//alert('ddd');
		if(w.finished){
			w.enabled=true;
			w.runButton.disabled=false;
			w.editor.disabled=false;
			
			clearInterval(w.interval);
		}
	}
}