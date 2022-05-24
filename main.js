function preload() {}

function setup() {
    canvas = createCanvas(700, 400);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 175, 100, 350, 200);
    let circle1 = color(255, 20, 147);
    fill(circle1);
    noStroke();
    circle(45, 45, 80);
    circle(655, 45, 80);
    circle(655, 355, 80);
    circle(45, 355, 80);
    let rec = color(0, 191, 255);
    fill(rec);
    noStroke();
    rect(35, 85, 20, 230);
    rect(645, 85, 20, 230);
    rect(85, 35, 530, 20);
    rect(85, 345, 530, 20);
}

function take_snapshot() {
    save();
}