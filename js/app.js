// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    // When enemy goes out off screen, it will appear again from the left in some time
    if (this.x > 1100) {
      this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-pink-girl.png';
    this.x = 0;
    this.y = 400;
    this.clickable = true;
    this.collisions = 0;
    this.collide = false;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.update = function() {
    this.x = this.x;
    this.y = this.y;
}

Player.prototype.handleInput = function(move) {
    switch (move) {
      case 'left':
        if (this.x > 0) {
          this.x = (this.x - 101);
        };
        break;
      case 'up':
        if (this.y > 60) {
          this.y = (this.y - 85);
        };
        break;
      case 'right':
        if (this.x < 404) {
          this.x = (this.x + 101);
        };
        break;
      case 'down':
        if (this.y < 400) {
          this.y = (this.y + 85);
        };
        break;
    }
}

//random functions for Enemies: random Y position (3 possibilities) and random speed (between 101 and 200), random start from the left
function randomEnemyY() {
    let randomY = Math.floor((Math.random() * 3) + 1);
    return (60 + 85 * (randomY - 1));
}

function randomEnemySpeed() {
    let randomS = Math.floor((Math.random() * 100) + 1);
    return (100 + randomS);
}

function randomEnemyX() {
    let randomX = Math.floor((Math.random() * 1000) + 1);
    return (-randomX);
}
// Now instantiate your objects
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();
const allEnemies = [];
const enemy1 = new Enemy(randomEnemyX(), randomEnemyY(), randomEnemySpeed());
allEnemies.push(enemy1);
const enemy2 = new Enemy(randomEnemyX(), randomEnemyY(), randomEnemySpeed());
allEnemies.push(enemy2);
const enemy3 = new Enemy(randomEnemyX(), randomEnemyY(), randomEnemySpeed());
allEnemies.push(enemy3);
const enemy4 = new Enemy(randomEnemyX(), randomEnemyY(), randomEnemySpeed());
allEnemies.push(enemy4);
const enemy5 = new Enemy(randomEnemyX(), randomEnemyY(), randomEnemySpeed());
allEnemies.push(enemy5);
const enemy6 = new Enemy(randomEnemyX(), randomEnemyY(), randomEnemySpeed());
allEnemies.push(enemy6);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    if (player.clickable) {
      player.handleInput(allowedKeys[e.keyCode]);
    }
});
