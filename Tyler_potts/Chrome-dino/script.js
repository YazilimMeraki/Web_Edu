const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


// Variables 

let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {}

//Event listeners

document.addEventListener('keydown', function(evt) {
    keys[evt.code] = true;
})
document.addEventListener('keyup', function(evt) {
    keys[evt.code] = false
})

class Player {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dy = 0;
        this.jumpForce = 15;
        this.orginalHeight = h;
        this.grounded = false;
        this.JumpTimer = 0;


    }

    Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }

    Animate() {
        // Jump Animation
        if (keys['Space'] || keys['KeyW']) {
            this.Jump();
        } else {
            this.JumpTimer = 0;
        }

        if (keys['ShiftLeft'] || keys['KeyS']) {
            this.h = this.orginalHeight / 2;

        } else {
            this.h = this.orginalHeight;
        }


        this.y += this.dy;

        // Gravity
        if (this.y + this.h < canvas.height) {
            this.dy += gravity;
            this.grounded = false;

        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - this.h;
        }



        this.Draw();
    }
    Jump() {
        if (this.grounded && this.JumpTimer == 0) {
            this.JumpTimer = 1;
            this.dy = -this.jumpForce;
        } else if (this.JumpTimer > 0 && this.JumpTimer < 15) {
            this.JumpTimer++;
            this.dy = -this.jumpForce - (this.JumpTimer / 50);
        }

    }


}

class Obstacle {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dx = -gameSpeed;

    }
    Update() {
        this.x += this.dx;
        this.Draw();
        this.dx = -gameSpeed
    }

    Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}

class Text {
    constructor(t, x, y, a, c, s) {
        this.t = t;
        this.x = x;
        this.y = y;
        this.a = a;
        this.c = c;
        this.s = s;

    }

    Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.font = this.s + "px sans-serif";
        ctx.textAling = this.a;
        ctx.fillText(this.t, this.x, this.y)
        ctx.closePath();



    }
}

// Game Functions

function SpawnObstacle() {
    let size = RandomIntInRange(20, 70);
    let type = RandomIntInRange(0, 1);
    let obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, '#ff0000')

    if (type == 1) {
        obstacle.y = player.orginalHeight + 10
    }
    obstacles.push(obstacle)
}


function RandomIntInRange(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function Start() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.font = "20px sans-serif";

    gameSpeed = 3;
    gravity = 1;

    score = 0;
    highscore = 0;

    if (localStorage.getItem('highscore')) {
        highscore = localStorage.getItem('highscore');
    }

    player = new Player(25, 0, 70, 70, "#000000");

    scoreText = new Text("Score: " + score, 25, 25, "left", "#212121", "20")
    highscoreText = new Text("Highscore :" + highscore, canvas.width - 250, 25, "right", "#212121")
    requestAnimationFrame(Update);

}


let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    spawnTimer--;
    if (spawnTimer <= 0) {
        SpawnObstacle();
        console.log(obstacles);
        spawnTimer = initialSpawnTimer - gameSpeed * 8;
        if (spawnTimer < 60) {
            spawnTimer = 60;
        }
    }



    // Spawn enemies 
    for (let i = 0; i < obstacles.length; i++) {
        let o = obstacles[i];

        if (o.x + o.w < 0) {
            obstacles.splice(i, 1);

        }

        if (player.x < o.x + o.w && player.x + player.w > o.x && player.y < o.y + o.h && player.y + player.h > o.y) {
            obstacles = [];
            score = 0;
            spawnTimer = initialSpawnTimer;
            gameSpeed = 3;
            window.localStorage.setItem('highscore', highscore);
        }

        o.Update();
    }

    player.Animate();

    score++;
    scoreText.t = "Score : " + score;
    scoreText.Draw();

    if (score > highscore) {
        highscore = score;
        highscoreText.t = 'Highscore :' + highscore;

    }

    highscoreText.Draw();



    gameSpeed += 0.003;

}


Start();