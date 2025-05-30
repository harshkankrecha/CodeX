

consoleText(['2b || !2b',"It all begins when you hit 100!!"], 'text', ['#082567','#082567'])

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the current time
    const currentTime = new Date();

    // Get all contest boxes
    const contests = document.querySelectorAll('.contest-box');

    contests.forEach(function(contest) {
        
        // Extract the contest status element and the start and end times from data attributes
        const contestId = contest.getAttribute('contest-id');
        console.log(contestId);
        const contestStatusElement = document.getElementById('contest-status' + contestId);

        // Parse start and end times from data attributes
        const contestStartTime = new Date(contest.getAttribute('data-start-time'));
        const contestEndTime = new Date(contest.getAttribute('data-end-time'));

        // Compare the current time with contest start and end times
        if (contestStartTime > currentTime) {
            
            contestStatusElement.textContent = 'Upcoming';
            contestStatusElement.style.color = '#17b794';
            contestStatusElement.style.fontSize = "20px";  
        } else if (contestEndTime < currentTime) {
            
            contestStatusElement.textContent = 'Ended';
            contestStatusElement.style.color = '#17b794';
            contestStatusElement.style.fontSize = "20px";
        } else {
            
            contestStatusElement.textContent = 'Ongoing';
            contestStatusElement.style.color = '#17b794';
            contestStatusElement.style.fontSize = "20px"; 
        }
    });
});
