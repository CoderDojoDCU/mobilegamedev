var cylinder;
var screenHeight = screen.height;
var jumpBy = 10;
var ninja;
var screenWidth = screen.width;
var runBy = 10;


function startGame() {
	cylinder = 	$("#cylinder");
    ninja = $("#ninja");
    ninja.click(function() {
        run();
    });
    jump(10);
}

function jump() {
    var cylinderDimension = cylinder.offset();
    var currentPosition = cylinderDimension.top;
    var bottomPosition = 320+currentPosition;
    var newPosition = currentPosition+jumpBy;
    
    if(bottomPosition >= screenHeight) {
        cylinder.css('top','0px');
        setRandomLeft();
    } else {
        cylinder.css('top', newPosition+"px");
    }
    setTimeout(jump, 30);
}

function setRandomLeft() {
    var leftPosition = Math.floor(Math.random() * 50) + 20;
    cylinder.css('margin-left', leftPosition + "%");
}

function run() {
    var ninjaDimension = ninja.offset();
    var ninjaLeft = ninjaDimension.left;
    var newLeftPosition = ninjaLeft+runBy;
    console.log(newLeftPosition);
    ninja.css('left', newLeftPosition+"px");

    if(newLeftPosition > screenWidth) {
        switchDirection();
        setTimeout(run, 20);
    }
    else if (newLeftPosition < 0) {
        stop();
    }
    else {
        if(isCollision()) {
            alert('Game over');
            
        } else {
            setTimeout(run, 20);
        }
    }

}


function switchDirection() {
    runBy = runBy * -1;
    ninja.attr('src','img/ninjas-red.png');
}

function stop() {
    ninja.css('left', "0px");
    ninja.attr('src','img/ninjas-green.png');
    runBy = runBy * -1;
   
}

startGame();