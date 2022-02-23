/**
 * @author Winry
 * @date 2022.02.22
 *
 * Pre-definitions:
 *     the text points have a home that stays the same
 *     the points also have a position that stays the same
 *     the points arrive at their home when they call a certain function
 *     in my previous example, if your mouse got too close, the points would
 *     flee from their home and then arrive.
 *     Important point: if you seek, you will never get home!
 *
 * Coding plan:
 *     add text steering code? ask permission.
 *     .download sound file from Liya's song.
 *     a couple branches:
 *         extract beats per minute from Liya's song
 *         —— or ——
 *         use p5.Beat or BeatDetector to detect beats
 *         —— or ——
 *         (family preference) extract amplitude.
 *
 *         Preference: Strong middle. p5.Beat is
 *         specifically designed to find beats!
 *         Amendment: It's called p5.peakDetect.
 *
 *         Also, last option will probably detect voice.
 *
 *     however calculated, use beat amplitude to grow point size.
 *         the text points should grow-shrink, in two frames.
 *     download happy birthday liya sound file
 *     when song is done, play birthday sound file and assemble text
 *     jiggle "Liya" while sound is playing
 */
let font

function preload() {
    font = loadFont('data/meiryo.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
}

function draw() {    
    background(234, 34, 24)
}