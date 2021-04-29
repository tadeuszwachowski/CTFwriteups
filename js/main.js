var commandLength = 0;
var rebooting = 0;

function term_run(com) {
	var answer;

	switch (com) {
		case '':
			answer = "";
			return answer;
		case 'whoami':
			answer = "I'm just a humble cybersecurity student, aspiring to be an expert or a CSO.<br/>At the moment, I'm trying to save some money and pass the OSCP and CompTIA exams.<br/>I love playing CTF ⚑ challenges.";
			return answer; 
		case 'history': 
			answer = "I worked as a salesperson and Team Leader in an amusement park for two seasons and now I'm studying cybersecurity at AGH University of Science and Technology in Kraków, Poland.";
			return answer; 
		case 'find': 
			answer = "You can contact me by email: <a href='mailto:twachowski@protonmail.com' style='color:red;text-decoration:bold;'>twachowski@protonmail.com";
			return answer; 
		case 'help': 
			answer = "Available commands: whoami, history, find, help, man help, clear";
			return answer; 
		case 'man help': 
			answer = "whoami - my bio<br/>history - well, my history<br/>find - contact";
			return answer; 
		case 'kill': 
			answer = "please don't";
			return answer; 
		case 'cat': 
			answer = "🐱 MEOW 🐱";		
			return answer; 
		case 'clear': 
			var c = document.getElementById("content");
			c.innerHTML = "<p id='terminal'></p><p id='inp'></p>";
			return answer;
		case 'cd writeups':
			window.open("https://qualorm.github.io/CTFwriteups", "_self");
			answer = "Here you go!";
			return answer;
		default:
			answer = com + ": command not found";
			return answer;
	}
}

function newline() {
		var hl = document.createElement("p");
	document.getElementById("content").appendChild(hl);
	hl.innerHTML = "<b>/home/twachowski$</b> <p id='inp'></p><p id='ps'>&#9601;</p>";
	blink();

	document.onkeydown = function(evt) {
	    if (rebooting == 0) {
	    	// evt = evt || window.event;
		    var key = event.keyCode || event.charCode;
		    if (key == 8 && commandLength > 0) {
		    	var old = inp.innerHTML;
		    	var shortened = old.slice(0,-1);
		    	inp.innerHTML = shortened;
		    	commandLength -= 1;
		    } else if (key >= 48 && key <= 57) {
		    	var charStr = String.fromCharCode(key);
		    	inp.innerHTML += charStr;
		    	commandLength += 1;
		    } else if (key == 173) {
		    	var charStr = String.fromCharCode(45);
		    	inp.innerHTML += charStr;
		    	commandLength += 1;
		    } else if (key >= 58 && key <= 90) {
		    	var charStr = event.key;
		    	inp.innerHTML += charStr;
		    	commandLength += 1;
		    } else if (key == 32) {
		    	inp.innerHTML += " ";
		    	commandLength += 1;
		    } else if (key == 13) {
		    	var command = inp.innerHTML;
		    	var prev_ps = document.getElementById("ps");
	 	    	prev_ps.parentNode.removeChild(prev_ps);
	 	    	var term = document.getElementById("terminal");
	 	    	terminal.innerHTML += "/home/twachowski$ " + command;
	 	    	if (command == '') {
	 	    		terminal.innerHTML += "<br/>";
	 	    	} else {
		    		terminal.innerHTML += "<br/>" + term_run(command) + "<br/>";
		    	};
		    	var prev_inp = document.getElementById("inp");
	 	    	prev_inp.parentNode.removeChild(prev_inp);
	 	    	hl.innerHTML = '';
		    	newline();
		    };
	    }
	};
}

async function inithelp() {
	var hl = document.getElementById('helpline');
	await sleep(1600);
	hl.innerHTML += "h";
	await sleep(200);
	hl.innerHTML += "e";
	await sleep(300);
	hl.innerHTML += "l";
	await sleep(100);
	hl.innerHTML += "p";
	await sleep(150);
	hl.innerHTML += "<br/>Available commands: whoami, history, find, help, man help, cd writeups<br/>";
	newline();
	
};

$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        inithelp();
    }, 3000);
    
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function blink() {
   var f = document.getElementById('ps');
   setInterval(function() {
      f.style.display = (f.style.display == '' ? 'none' : '');
   }, 1000);
};

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


function waitingKeypress() {
  return new Promise((resolve) => {
    document.addEventListener('keydown', onKeyHandler);
    function onKeyHandler(e) {
      if (e.keyCode === 13) {
        document.removeEventListener('keydown', onKeyHandler);
        resolve();
      }
    }
  });
}

async function closeTerminal() {
	var c = document.getElementById("content");
	rebooting = 1;
	c.innerHTML = "press Enter to reboot...";
	await waitingKeypress();
	c.innerHTML = "";
	await sleep(100);
	c.innerHTML = "rebooting";
	for (i=0;i<6;i++) {
		await sleep(800);
		c.innerHTML += ".";
	}
	await sleep(1200);
	c.innerHTML = "";
	await sleep(600);
	c.innerHTML = "<p id='helpline'> <b>/home/twachowski$ </b><p id='terminal'></p>";
	rebooting = 0;
	sleep(300);
	inithelp();
}
